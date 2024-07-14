import React from 'react';
import './ItemDescription.css';
import { Link } from 'react-router-dom';

function HBook() {
  return (
    <div className='book-spacing'>
        <div>
            <img className='product-img' src='https://tse2.mm.bing.net/th?id=OIP.EIoM9kriGTmhRyJ98PSAngHaLH&pid=Api&P=0&h=220'/>
        </div>
        <div className='text'>
            <span className='title-text'>
            Harry Potter and the Sorcerer's Stone (Harry Potter, Book 1) (MinaLima Edition)
            </span><br/>
            <div className='author-space'> 
            <span className='author'>by <span className='form-color'>J. K. Rowling </span> (Author), <span className='form-color'> Minalima</span> (Illustrator)</span> <br/>
            </div>
            <span>🌟🌟🌟🌟🌟</span> <span className='form-color'> 21,659 ratings</span>
            <hr/>
            <div className='bottom-text'>
            <div className='bottom-space'><span><b>A dazzling new edition of J.K. Rowling's Harry Potter and the Sorcerer's Stone, fully illustrated in brilliant color and featuring exclusive interactive paper craft elements, including a foldout Hogwarts letter and more!</b></span><br/></div>
            <div className='bottom-space'><span>In this stunning new edition of Harry Potter and the Sorcerer's Stone, experience the story as never before. J.K. Rowling's complete and unabridged text is accompanied by full-color illustrations on nearly every page and eight exclusive, interactive paper craft elements: Readers will open Harry's Hogwarts letter, reveal the magical entryway to Diagon Alley, make a sumptuous feast appear in the Great Hall, and more.Designed and illustrated by award-winning design studio MinaLima -- best known for establishing the visual graphic style of the Harry Potter and Fantastic Beasts films -- this edition is sure to be a keepsake for Harry Potter fans, a beautiful addition to any collector's bookshelf, and an enchanting way to introduce the first book in this beloved series to a new generation of readers.</span><br/></div>
            </div>
        </div>
        <div>
            <form className='form'>
                <div className='price'><p className='price-size'> $22.79 </p></div>
                    <div>
                        <div className='form-space'>
                            <span>Get <b>Fast, Free Shipping</b> with</span><br/>
                            <span className='form-color'>Amazon Prime</span><br/>
                            <span className='form-color'>FREE Returns </span><br/>
                        </div>
                           <span><span className='form-color'>FREE delivery</span>, shipped by Amazon over $35</span><br/>
                     <div className='space-green'>
                           <span className='form-green'>In Stock</span>
                      </div>
                      <Link to={'/'}>
                      <button className='form-cart'>Back</button><br/>
                      </Link>
                      <span className='size-14'>Ships from</span> <span className='size-12'> Amazon.com</span><br/>
                      <span className='size-14'>Sold by</span> <span className='size-12'> Amazon.com</span><br/>
                     <div className='size-14-space'> <span className='size-14'>Returns</span><span className='size-12-color'>Eligible for Return, Refund or <br/>Replacement within 30 days of receipt</span></div> <br/>
                      <span className='size-14'>Payment</span> <span className='size-12-color'> Secure transaction</span><br/>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default HBook;