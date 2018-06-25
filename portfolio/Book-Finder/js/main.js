function bookSearch() {
	// store user input
	var search = document.getElementById('search').value;
	// empty any previous data
	document.getElementById('results').innerHTML = "";
	console.log(search);


	// make data request
	$.ajax({
		// url for the data base
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType:'json',

		// on success, then do this
		success: function(data){
			// loop through data in data.items
			for (i = 0; i < data.items.length; i++) {
				// store search books vlolume info
				var bookData = data.items[i].volumeInfo;

				// create new elements
				// create newBook div to store each book result
				var newBook = document.createElement('div');
				// create new tag to store info for each book that can put in newBook div
				var newBookImg = document.createElement('img');
				var newBookTitle = document.createElement('h2');
				var newBookAuthor = document.createElement('h3');
				var newBookDate = document.createElement('h4');
				var newBookAnchor = document.createElement('a');

				// add class to elements
				newBook.className = 'newBook';
				newBookAnchor.className = 'btn btn-primary';
				newBookImg.className = 'newBookImgClass';

				// add book title to book title tag
				newBookTitle.innerText = bookData.title;
				// test if it work
				// console.log(newBookTitle)

				// add detail to newBookAnchor
				newBookAnchor.innerText = 'show more';
				newBookAnchor.href = bookData.infoLink;
				// setAttribute to a tag to make it open in new tag
				newBookAnchor.setAttribute('target','_blank');
				
				// add img for the book(if there exists)
				newBookImg.src = bookData.imageLinks.thumbnail;
				newBookImg.setAttribute('alt','No Image');

				// add publish date
				if (bookData.publishedDate) {
					newBookDate.innerText = bookData.publishedDate;
				} else {
					newBookDate.innerText = 'No publish date found';
				}

				// add author info
				if (bookData.authors) {
					newBookAuthor.innerText = bookData.authors;
				} else {
					newBookAuthor.innerText = 'No author found';
				}

				// add all tag to div
				newBook.appendChild(newBookImg);
				newBook.appendChild(newBookTitle);
				newBook.appendChild(newBookAuthor);
				newBook.appendChild(newBookDate);
				newBook.appendChild(newBookAnchor);

				// add the whole div the document
				var results = document.getElementById('results');
				results.appendChild(newBook);

				// results.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
				//  + "<img src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "''>"

				// console.log(data)
			}
		},

		type:'GET'
	});
}

document.getElementById('button').addEventListener('click', bookSearch, false);




// enable press enter to search
document.getElementById('search').onkeypress=function(enter){
    if(enter.keyCode==13){
        document.getElementById('button').click();
    }
};

// <img src="   ">