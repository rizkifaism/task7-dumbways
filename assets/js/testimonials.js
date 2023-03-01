class Testimonials {
  constructor(quote, image) {
    this._quote = quote;
    this._image = image;
  }

  get quote() {
    return this._quote;
  }

  get image() {
    return this._image;
  }

  get testiHtml() {
    return `<div class="card-testi">
              <img src="${this.image}" alt="person" />
              <p>"${this.quote}"</p>
              <p class="author">- ${this.author}</p>
            </div>`;
  }
}

class AuthorTesti extends Testimonials {
  constructor(author, quote, image) {
    super(quote, image);
    this._author = author;
  }

  get author() {
    return this._author;
  }
}

class CompanyTesti extends Testimonials {
  constructor(company, quote, image) {
    super(quote, image);
    this._company = company;
  }

  get author() {
    return this._company + " Company";
  }
}

const testi1 = new AuthorTesti(
  "Surya Elidanto",
  "Mantap sekali jasanya!",
  "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);

const testi2 = new AuthorTesti("Surya Elz", "Keren lah pokoknya!", "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60");

const testi3 = new CompanyTesti("ABC", "Wuhuu keren lah!", "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60");

let testimonialData = [testi1, testi2, testi3];
let testimonialHtml = "";

for (i = 0; i < testimonialData.length; i++) {
  testimonialHtml += testimonialData[i].testiHtml;
}

document.querySelector(".wrap-testi").innerHTML = testimonialHtml;
