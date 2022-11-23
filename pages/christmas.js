// Make a nextjs page that renders a christmas tree

import React from 'react';
import Header from '../components/Header';

const Christmas = () => {
  return (
    <div>

      <Header />
      <div className='my-[16vh] md:my-[12vh] lg:px-16 px-4'>
        <section>
          <div className='h-[45vh] md:h-[65vh] bg-[url("https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=100")] bg-contain rounded-[10px]'>
            <div className='flex justify-center items-center frosted'>
              <div className='relative bg-[#0b2624] py-4 md:py-6 px-4 md:px-20 w-[350px] md:w-[825px]'>
                <h3 className='text-center md:text-left text-white font-bold text-md md:text-xl py-1 tracking-wide'>Christmas 2022</h3>
                <h2 className='text-center md:text-left text-white text-3xl md:text-5xl font-medium py-1'>Michael's Wish list</h2>
                <p className='text-center md:text-left tracking-tight text-white font-normal text-sm md:text-lg py-2'>Feel free to get me what you like ❤️</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-16'>
          <div>
            <h1 className='fancy-text text-center text-white text-6xl py-1 underline'>1.Gift Cards</h1>
            <p className='lobster text-center text-white py-2 text-2xl'>
              If you want to buy something quick here are some places I like...
            </p>


            <div>
              <div className='grid sm:grid-cols-1 lg:grid-cols-4 sm:px-10 lg:px-40 py-10 gap-y-16 items-center justify-center'>
                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://cdn.shopify.com/s/files/1/0056/4562/products/E_gift_card_update_-02_800x500.jpg?v=1655393527' alt='la_colombe' />

                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://s3.amazonaws.com/cms.ipressroom.com/285/files/20212/604b65a1b3aed3384f733bb9_Top+Questions+Answered+about+Dunkin%27+Gift+Cards/Top+Questions+Answered+about+Dunkin%27+Gift+Cards_3e6e1bab-ae3c-40ff-91c6-1f6e4cb170bb-prv.jpg' alt='dunkin' />

                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://images.g2a.com/1024x768/1x1x0/amazon-gift-card-50-usd-amazon-united-states-i10000001698084/59e5ae945bafe388fc3cb5f5' alt='amazon' />

                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://assets.cardly.net/production/gift-cards/2/3/f/23f988e8-39ed-44ea-9f8a-e1630519d09e/card-image/macys-a7a3d8ac62261f1ccd2026f0eb0b90db.webp' alt='macys' />

                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://image.uniqlo.com/UQ/ST3/eu/imagesother/2022/content-pages/giftcard/gc-03.png' alt='uniqlo' />

                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://www.rei.com/assets/drsp/2021/q4/gift-cards/rei_gc_ecard_corecard_800x503/live.png' alt='rei' />

                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://m.media-amazon.com/images/I/41duljjD6%2BL.jpg' alt='starbucks' />

                <img className='w-[300px] lg:w-[250px] rounded-[10px]' src='https://s.wsj.net/public/resources/images/BN-PO355_cash_M_20160825105904.jpg' alt='cash' />

              </div>
            </div>

          </div>
        </section>


        <section className='mt-16'>
          <div>
            <h1 className='fancy-text text-center text-white text-6xl py-1 underline'>2.Snacks List</h1>
            <p className='lobster text-center text-white py-2 text-2xl'>
              Here are some snacks I like that you can give me
            </p>

            <div>
              <div className='grid sm:grid-cols-1 lg:grid-cols-4 sm:px-10 lg:px-40 py-10 gap-y-16 items-center justify-center'>
                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[200px] rounded-[10px]' src='https://m.media-amazon.com/images/I/610IsBjdh0L._SL1500_.jpg' alt='espresso_beans' />

                  <p className='text-center text-white py-4 text-2xl'>Dark Chocolate Espresso Beans</p>

                </div>

                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[250px] h-[250px] object-contain rounded-[10px]' src='https://m.media-amazon.com/images/I/81+zUBQ1JKL._AC_SL1500_.jpg' alt='hichew' />

                  <p className='text-center text-white py-4 text-2xl'>
                    Hi-Chew Chewy Candy</p>
                </div>

                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[250px] h-[250px] object-contain rounded-[10px]' src='https://m.media-amazon.com/images/I/81SFEy-bzlL._SL1500_.jpg' alt='Sour patch' />

                  <p className='text-center text-white py-4 text-2xl'>
                    Sour Patch Kids
                  </p>

                </div>

                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[250px] h-[250px] object-contain rounded-[10px]' src='https://m.media-amazon.com/images/I/81gIRekchdL._SL1500_.jpg' alt='Stroopwafel' />

                  <p className='text-center text-white py-4 text-2xl'>
                    Daelmans Stroopwafel Caramel
                  </p>

                </div>

                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[250px] h-[250px] object-contain rounded-[10px]' src='https://m.media-amazon.com/images/I/91kCsjSN78L._SL1500_.jpg' alt='Kopiko' />

                  <p className='text-center text-white py-4 text-2xl'>
                    Kopiko Coffee Candy
                  </p>

                </div>

                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[250px] h-[250px] object-contain rounded-[10px]' src='https://m.media-amazon.com/images/I/61HgxTcad-L._SL1001_.jpg' alt='Pocky almond crush' />

                  <p className='text-center text-white py-4 text-2xl'>
                    Pocky Chocolate Almond Crush Biscuit
                  </p>
                </div>

                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[250px] h-[250px] object-contain rounded-[10px]' src='https://m.media-amazon.com/images/I/71g6UTPUzoL._SX679_.jpg' alt='Mintia' />

                  <p className='text-center text-white py-4 text-2xl'>
                    Mintia Wild & Cool
                  </p>
                </div>

                <div className='flex flex-col items-center'>
                  <img className='w-[300px] lg:w-[250px] h-[250px] object-contain rounded-[10px]' src='https://m.media-amazon.com/images/I/81VZZExgmEL._SX679_.jpg' alt='Gingerbread House Cookies' />

                  <p className='text-center text-white py-4 text-2xl'>
                    Gingerbread House Cookies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div >
  );
}

export default Christmas;
