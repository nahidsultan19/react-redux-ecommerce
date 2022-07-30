import React from 'react';
import { TbPoint } from 'react-icons/tb';

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full my-5">
                    <div className='flex items-center justify-center mx-auto'>
                        <div className='w-96'>
                            <h2 className='text-2xl font-bold'>Kitchen Essentials</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt rhoncus, sit faucibus imperdiet ullamcorper ipsum egestas.</p>
                            <button className='btn text-upper mt-4'>shop now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/MpBN69d/Group-8.png" class="w-60" />
                        </div>
                    </div>
                </div>
                <div id="item2" class="carousel-item w-full my-5">
                    <div className='flex items-center justify-center mx-auto'>
                        <div className='w-96'>
                            <h2 className='text-2xl font-bold'>Kitchen Essentials</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt rhoncus, sit faucibus imperdiet ullamcorper ipsum egestas.</p>
                            <button className='btn text-upper mt-4'>shop now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/MpBN69d/Group-8.png" class="w-60" />
                        </div>
                    </div>
                </div>
                <div id="item3" class="carousel-item w-full my-5">
                    <div className='flex items-center justify-center mx-auto'>
                        <div className='w-96'>
                            <h2 className='text-2xl font-bold'>Kitchen Essentials</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt rhoncus, sit faucibus imperdiet ullamcorper ipsum egestas.</p>
                            <button className='btn text-upper mt-4'>shop now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/MpBN69d/Group-8.png" class="w-60" />
                        </div>
                    </div>
                </div>
                <div id="item4" class="carousel-item w-full my-5">
                    <div className='flex items-center justify-center mx-auto'>
                        <div className='w-96'>
                            <h2 className='text-2xl font-bold'>Kitchen Essentials</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt rhoncus, sit faucibus imperdiet ullamcorper ipsum egestas.</p>
                            <button className='btn text-upper mt-4'>shop now</button>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/MpBN69d/Group-8.png" class="w-60" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center w-full py-1">
                <a href="#item1" class=" btn-xs"><TbPoint className='text-xl' /></a>
                <a href="#item2" class=" btn-xs"><TbPoint className='text-xl' /></a>
                <a href="#item3" class=" btn-xs"><TbPoint className='text-xl' /></a>
                <a href="#item4" class=" btn-xs"><TbPoint className='text-xl' /></a>
            </div>
        </div>
    );
};

export default Banner;