import React, { useEffect, useState } from 'react';
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    const rows = document.querySelectorAll('.cb-tagreel-row');

    rows.forEach(function (e, i) {
      let row_width = e.getBoundingClientRect().width;
      let row_item_width = e.children[0].getBoundingClientRect().width;
      let initial_offset = ((2 * row_item_width) / row_width) * 100 * -1;
      let x_translation = initial_offset * -1;

      gsap.set(e, {
        xPercent: `${initial_offset}`,
      });

      let duration = 5 * (i + 1);

      var tl = gsap.timeline();

      tl.to(e, {
        ease: 'none',
        duration: duration,
        xPercent: 0,
        repeat: -1,
      });
    });
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <>
      <div className="relative isolate flex   px-6 pt-14 lg:px-8">
        {/* hero section  */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#3B82F6] to-[#10B981] opacity-75 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto lg:flex   max-w-7xl  sm:gap-auto py-32 sm:pt-48 lg:py-28">
          <div className='lg:w-[60%]  lg:mx-auto'>
            <div className="text-left  lg:mt-28    lg:pr-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform Playtime into Paytime
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Play Smarter, Earn Harder: Your Digital Rewards, Your Real Money. Cash Out with paytime Today!
              </p>
              <div className="mt-10 flex items-center justify-start gap-x-6">
                <a
                  href="https://play.google.com/store/apps/details?id=com.rachiapps.exchangeopinionrewards&referrer=utm_source%3Dappbrain%26utm_medium%3Dappbrain_web%26utm_campaign%3Dappbrain_web"
                  className="rounded-md  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gradient-to-r from-blue-500 to-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  it's Paytime
                </a>
                <a href="#" className="text-sm  font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div className='m-auto mt-10'>
            <img className='h-[500px] rounded-3xl lg:w-[full] object-fill' src='/images/WelcomeScreen.png' alt='app image' />
          </div>
        </div>
      </div>
      {/* infinite x scroll */}
      <div className="bg-gray-800 p-6 font-archivo-black">
        <section className="cb-tagreel">
          <div className="cb-tagreel-content" style={{ padding: '10px 0' }}>
            <div className="cb-tagreel-items" role="marquee" style={{ margin: '-58px 0', overflow: 'hidden', cursor: 'default' }}>
              {/* First Row */}
              <div className="cb-tagreel-row" style={{ display: 'flex', position: 'relative', textAlign: 'center', whiteSpace: 'nowrap' }}>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', padding: "50px 0px", flex: '0 0 33%', textTransform: 'uppercase' }}><span className="text-white">Paytime</span></div>
                <div className="cb-tagreel-item -stroke" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', padding: "50px 0px", flex: '0 0 33%', textTransform: 'uppercase', color: 'transparent', textShadow: 'none', WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)' }}><span className="text-white">Paytime</span></div>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', padding: "50px 0px", flex: '0 0 33%', textTransform: 'uppercase' }}><span className="text-white">Paytime</span></div>
                <div className="cb-tagreel-item -stroke" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', padding: "50px 0px", flex: '0 0 33%', textTransform: 'uppercase', color: 'transparent', textShadow: 'none', WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)' }}><span className="text-white">Paytime</span></div>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', padding: "50px 0px", flex: '0 0 33%', textTransform: 'uppercase' }}><span className="text-white">Paytime</span></div>
              </div>

              {/* Second Row */}
              {/* <div className="cb-tagreel-row" style={{ display: 'flex', position: 'relative', textAlign: 'center', whiteSpace: 'nowrap' }}>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase' }}><span className="text-white">Realmoney</span></div>
                <div className="cb-tagreel-item -stroke" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase', color: 'transparent', textShadow: 'none', WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)' }}><span className="text-white">Realmoney</span></div>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase' }}><span className="text-white">Realmoney</span></div>
                <div className="cb-tagreel-item -stroke" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase', color: 'transparent', textShadow: 'none', WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)' }}><span className="text-white">Realmoney</span></div>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase' }}><span className="text-white">Realmoney</span></div>
              </div> */}

              {/* Third Row */}
              {/* <div className="cb-tagreel-row" style={{ display: 'flex', position: 'relative', textAlign: 'center', whiteSpace: 'nowrap' }}>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase' }}><span className="text-white">Cashout</span></div>
                <div className="cb-tagreel-item -stroke" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase', color: 'transparent', textShadow: 'none', WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)' }}><span className="text-white">Cashout</span></div>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase' }}><span className="text-white">Cashout</span></div>
                <div className="cb-tagreel-item -stroke" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase', color: 'transparent', textShadow: 'none', WebkitTextStroke: '2px rgba(0, 0, 0, 0.2)' }}><span className="text-white">Cashout</span></div>
                <div className="cb-tagreel-item" style={{ position: 'relative', lineHeight: '100%', fontSize: '3.75vw', flex: '0 0 33%',  textTransform: 'uppercase' }}><span className="text-white">Cashout</span></div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
      {/* testimonial */}
      <div class="text-center w-full">
        <svg class="text-gray-100 h-8 mx-auto" viewBox="0 0 150 29" version="1.1"
          xmlns="http://www.w3.org/2000/svg" >
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop-HD" transform="translate(-1112.000000, -438.000000)" >
              <g id="logo-4" transform="translate(1112.000000, 438.000000)">
                <path
                  d="M76.6605841,24.316569 L76.6605841,6.43875952 L94.3451636,17.7743071 C94.7005374,18.0021643 95.1070794,18.1154024 95.5136215,18.1154024 C95.9201636,18.1154024 96.3267056,18.0021643 96.6820794,17.7743071 L114.366659,6.43875952 L114.366659,24.316569 L76.6605841,24.316569 Z M109.288388,4.65802143 L95.5136215,13.4871405 L81.7388551,4.65802143 L109.288388,4.65802143 Z M114.366659,0.437140476 L76.6605841,0.437140476 L74.5178271,0.437140476 L72.375771,0.437140476 L72.375771,24.316569 L72.375771,28.53745 L76.6605841,28.53745 L114.366659,28.53745 L118.651472,28.53745 L118.651472,24.316569 L118.651472,0.437140476 L116.509416,0.437140476 L114.366659,0.437140476 Z"
                  id="Fill-76"></path>
                <path
                  d="M10.224743,18.2356143 L14.5039486,6.60247143 L18.7831542,18.2356143 L10.224743,18.2356143 Z M10.8415654,0.847352381 L0.225911215,27.8822571 L6.89179907,27.8822571 L8.6196028,23.3023286 L20.3875935,23.3023286 L22.074743,27.8822571 L28.7406308,27.8822571 L18.1656308,0.847352381 L10.8415654,0.847352381 Z"
                  id="Fill-77"></path>
                <path
                  d="M51.8908879,5.50827381 C54.7303738,5.50827381 57.1990654,7.25103571 58.3507009,9.43984524 L63.3707944,7.0079881 C61.4369159,3.6439881 57.9392523,0.401511905 51.8908879,0.401511905 C43.661215,0.401511905 37.2834112,6.07584524 37.2834112,14.3850357 C37.2834112,22.6942262 43.661215,28.3685595 51.8908879,28.3685595 C57.9392523,28.3685595 61.3955607,25.0853452 63.3707944,21.7213452 L58.3507009,19.3302262 C57.1990654,21.5590833 54.7303738,23.2617976 51.8908879,23.2617976 C46.9121495,23.2617976 43.2911215,19.4917976 43.2911215,14.3850357 C43.2911215,9.27758333 46.9121495,5.50827381 51.8908879,5.50827381"
                  id="Fill-78"></path>
                <polygon id="Fill-79"
                  points="149.674276 5.91365238 149.674276 0.846938095 130.25278 0.846938095 130.25278 27.8825333 149.674276 27.8825333 149.674276 22.815819 136.095771 22.815819 136.095771 16.6954381 149.386192 16.6954381 149.386192 11.6287238 136.095771 11.6287238 136.095771 5.91365238">
                </polygon>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div
        class="relative max-w-screen w-full px-8 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto  text-gray-900 sm:rounded-lg shadow-lg">
        <div class="absolute right-0 bottom-0 hero-pattern w-64 h-56"></div>
        <div class="relative">
          <div>
            <h2 class="text-center text-gray-800 text-4xl lg:text-5xl font-bold leading-tight">Testimonials</h2>
            <div class="my-4 mx-auto w-72 rounded-lg h-2  bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div class="text-center text-gray-700 font-light">Here are what some of our amazing customers are
              saying ...</div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:mx-0">
            <div
              class="relative mx-auto mt-8 rounded-lg shadow-lg max-w-sm p-10  text-gray-700 leading-snug flex flex-col justify-between">
              <div class="flex items-center justify-start">
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
              </div>
              <div class="mt-2 pt-5">
                I am very happy with this app. I got my money back in my paytm wallet i.e. Rs 1926 for purchase of Rs 3210 token. It refunded my money from my playstore acct within a week.(purchase made -5.10.2020 and refund date -12.10.2020)
              </div>
              <div>
                <div class="mx-auto w-full border border-gray-300 my-8"></div>
                <div class="flex items-center">
                  <div>
                    <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                      src="https://play-lh.googleusercontent.com/a-/ALV-UjWRWNaW0g1VNqwuJrzeAg9MlVxbyJ7cJ8CfyMbET6LlRSU=s32-rw" alt='userimage' />
                  </div>
                  <div class="ml-4">
                    <div class="font-bold">Rohit Karmaker</div>
                    <div class="text-sm text-gray-600 mt-1"><a href="#">Student</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mx-auto mt-8 rounded-lg shadow-lg max-w-sm p-10  text-gray-700 leading-snug flex flex-col justify-between">
              <div class="flex items-center justify-start">
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
              </div>
              <div class="mt-2 pt-5">
                Very nice app I had done a transaction of 10000 over this app and as it is written you will get 60% of the total amount I got 6000 directly in my account within 2-3 working days. Every one should use this app if they want to take out google play cash to paytm,bank or any other upi wallet.
              </div>
              <div>
                <div class="mx-auto w-full border border-gray-300 my-8"></div>
                <div class="flex items-center">
                  <div>
                    <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                      src="https://play-lh.googleusercontent.com/a-/ALV-UjU1J8G6IJyhJcdJRkoqoPXyyoYg9RR00yCs16sA0sU6ZqU=s32-rw" alt='userimage' />
                  </div>
                  <div class="ml-4">
                    <div class="font-bold">Preeti Patil</div>
                    <div class="text-sm text-gray-600 mt-1">Student<a href="#"></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mx-auto mt-8 rounded-lg shadow-lg max-w-sm p-10  text-gray-700 leading-snug flex flex-col justify-between">
              <div class="flex items-center justify-start">
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
              </div>
              <div class="mt-2 pt-5">
                Such a great app, it pays within 3 days, I like this a lot and it is the best one for exchanging rewards, I never and ever seen this type legit app, I highly recommend you to all, this is the one app I am searching from long ago, thank you for this wonderful app, Thanks for Development of the app....
              </div>
              <div>
                <div class="mx-auto w-full border border-gray-300 my-8"></div>
                <div class="flex items-center">
                  <div>
                    <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                      src="https://play-lh.googleusercontent.com/a-/ALV-UjU2Rul5Zz6A4MfOBTFKI-Ni6PxM7JXe0t8ciZ9cuAXL-7Y=s32-rw" alt='userimage' />
                  </div>
                  <div class="ml-4">
                    <div class="font-bold">Nitin Naik</div>
                    <div class="text-sm text-gray-600 mt-1">Student<a href="#"></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mx-auto mt-8 rounded-lg shadow-lg max-w-sm p-10  text-gray-700 leading-snug flex flex-col justify-between">
              <div class="flex items-center justify-start">
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
              </div>
              <div class="mt-2 pt-5">
                I love this app . My friends suggestion me use exchange reward app. Reward exchange returned my money. Thanku you so exchange reward team god bless you.
              </div>
              <div>
                <div class="mx-auto w-full border border-gray-300 my-8"></div>
                <div class="flex items-center">
                  <div>
                    <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                      src="https://play-lh.googleusercontent.com/a-/ALV-UjVtpNeMF-8cNUDT-nwHekmtRHNXkoLuqXo6xtNRR114wOI=s32-rw" alt='userimage' />
                  </div>
                  <div class="ml-4">
                    <div class="font-bold">Raj Kumar</div>
                    <div class="text-sm text-gray-600 mt-1">Student<a href="#"></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mx-auto mt-8 rounded-lg shadow-lg max-w-sm p-10  text-gray-700 leading-snug flex flex-col justify-between">
              <div class="flex items-center justify-start">
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
              </div>
              <div class="mt-2">
                Very good app, I liked the user interface and the app is very smooth, there are no bugs or problems in the app
              </div>
              <div>
                <div class="mx-auto w-full border border-gray-300 my-8"></div>
                <div class="flex items-center">
                  <div>
                    <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                      src="https://play-lh.googleusercontent.com/a-/ALV-UjXxE-vNss5MluJRcEK_HrjRq-iYtWiCSckcfqxQMFveLAM=s32-rw" alt='userimage' />
                  </div>
                  <div class="ml-4">
                    <div class="font-bold">FIANTé YT</div>
                    <div class="text-sm text-gray-600 mt-1">Gamer<a href="#"></a></div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="mx-auto mt-8 rounded-lg shadow-lg max-w-sm p-10  text-gray-700 leading-snug flex flex-col justify-between">
              <div class="flex items-center justify-start">
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
                <i class="ri-star-fill text-2xl text-green-500"></i>
              </div>
              <div class="mt-2">
                This is nice one ..good and Fast payment. Very smooth application and very fast payment. Good one
              </div>
              <div>
                <div class="mx-auto w-full border border-gray-300 my-8"></div>
                <div class="flex items-center">
                  <div>
                    <img class="w-12 h-12 rounded-full border-2 border-indigo-400"
                      src="https://play-lh.googleusercontent.com/a-/ALV-UjXc2FXnNfKVddqQyi3ToJ00EXtPmxjIvqWS42v5PT3beg=s32-rw" alt='userimage' />
                  </div>
                  <div class="ml-4">
                    <div class="font-bold">Pranav Jayan</div>
                    <div class="text-sm text-gray-600 mt-1">Student <a href="#"></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ  */}
      <section className="relative z-9 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] lg:px-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Any Questions? Look Here
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="Unlock Real Value: Convert Google Play Vouchers to Cash with Paytime!"
                text=" Experience a groundbreaking way to turn your Google Play vouchers into tangible cash with Paytime. Seamlessly exchange your digital rewards for real money, opening a world of possibilities. Fast, secure, and user-friendly – discover the financial freedom you deserve. Download Paytime now and transform your virtual credits into real-world currency effortlessly.."
              />
              <AccordionItem
                header="Monetize Your Digital Rewards: Paytime Turns Google Play Vouchers into Real Cash!"
                text=" Maximize the value of your Google Play vouchers by converting them into real cash effortlessly. Paytime offers a seamless and secure platform for unlocking the monetary potential of your digital rewards. Start earning real cash today!."
              />
              <AccordionItem
                header="Cash In Your Play: Paytime – Your Gateway to Real Money from Google Play Vouchers!"
                text="Say goodbye to unused Google Play vouchers! Paytime provides a straightforward way to convert your virtual credits into cold, hard cash. Turn your gaming rewards into real-world currency and enjoy the freedom to spend or save as you please."
              />
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <AccordionItem
                header="From Play to Pay: Paytime - Transforming Google Play Vouchers into Cash Delight!"
                text="Elevate your digital experience with Paytime, where your Google Play vouchers become a gateway to real cash delights. Our secure and efficient platform ensures a hassle-free conversion process, putting the power of real money in your hands."
              />
              <AccordionItem
                header="Cash Rewards Unleashed: Paytime - Your Personal Google Play Voucher Exchange!"
                text=" Embrace the convenience of Paytime, your go-to platform for turning Google Play vouchers into instant cash rewards. Navigate a seamless exchange process and unlock the financial potential of your digital assets. Download now to experience the ease of cashing in your rewards."
              />
              <AccordionItem
                header="Play, Earn, Cash Out: Paytime – Your Ultimate Google Play Voucher to Cash Converter!?"
                text="Play your favorite games, earn Google Play vouchers, and seamlessly convert them into real cash with Paytime. Our user-friendly interface and secure transactions make cashing out your digital rewards a breeze. Don't miss out on the cash rewards waiting for you – download now!"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg
            width="1440"
            height="886"
            viewBox="0 0 1440 886"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="1308.65"
                y1="1142.58"
                x2="602.827"
                y2="-418.681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3056D3" stop-opacity="0.36" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  )
}


const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${active ? "rotate-180" : ""
              }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-white">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
          }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};