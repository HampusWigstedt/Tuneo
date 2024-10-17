'use client'
import React from 'react'


const BlogMain = () => {

    return (

        <div className="p-4 my-6">

            <div>
                <h1 className="text-4xl font-bold text-center py-8">Welcome to the Tuneo Blog</h1>
                <div className='py-4'>

                    <div className="hero min-h-[150px] bg-base-200 mb-8 rounded-lg">
                        <div className="hero-content flex-col md:flex-row">
                            <div className="flex flex-col md:flex-row items-center space-x-4 justify-center my-6">
                                <img src="https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2F15fa3d64838ee7ab73cd6ed48c920693.1000x1000x1.png" alt="Blog Title" className="max-w-72 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-2xl font-bold">Royel Otis - If Our Love Is Dead</h1>
                                    <p className="py-2">Royel otis release yet another bonus track for their latest album &#34;PRATTS & PAIN&#34;</p>
                                    <label htmlFor="my_modal_1" className="btn text-white border-none bg-violet-900 btn-primary">Click to View</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="my_modal_1" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <img src="https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2F15fa3d64838ee7ab73cd6ed48c920693.1000x1000x1.png" alt="Description of the image" className="w-full h-auto rounded-xl" />
                            <h3 className="text-lg font-bold underline mt-4">Royel Otis - If Our Love Is Dead</h3>
                            <p className="py-4">Royel otis release yet another bonus track for their latest album &#34;PRATTS & PAIN&#34;. The band is currently on tour in Europe and from what it looks like, they have no plan slowing down right now. The song is great. Plain & Simple</p>
                            <p className="btn text-white border-none bg-violet-900 btn-primary">Rating - 7/10</p>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_1">Close</label>
                    </div>

                </div>

                <div className="hero min-h-[150px] bg-base-200 mb-8 rounded-lg">
                    <div className="hero-content flex-col md:flex-row">
                        <div className="flex flex-col md:flex-row items-center space-x-4 justify-center my-6">
                            <img src="https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2Fc5abdf5b483cbd13db01035181caa69c.1000x1000x1.png" alt="Blog Title" className="max-w-72 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-2xl font-bold">Bon Iver is Back</h1>
                                <p className="py-2">Bon Iver is back and are set to release their new EP &#34;SABLE&#34; on october 18th.</p>
                                <label htmlFor="my_modal_2" className="btn text-white border-none bg-violet-900 btn-primary">Click to View</label>
                            </div>
                        </div>
                    </div>
                </div>

                <input type="checkbox" id="my_modal_2" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <img src="https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2Fc5abdf5b483cbd13db01035181caa69c.1000x1000x1.png" alt="Description of the image" className="w-full h-auto rounded-xl" />
                        <h3 className="text-lg font-bold underline mt-4">Bon Iver - S P E Y S I D E</h3>
                        <p className="py-4">Bon Iver have already released their first single of the up and coming EP &#34;SABLE&#34;. S P E Y S I D E is a comback of the sound from For Emma, Forever Ago and we are so stoked to hear what this album has to offer.</p>
                        <p className="btn text-white border-none bg-violet-900 btn-primary">Rating - 9/10</p>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_2">Close</label>
                </div>

                <div className="hero min-h-[150px] bg-base-200 mb-8 rounded-lg">
                    <div className="hero-content flex-col md:flex-row">
                        <div className="flex flex-col md:flex-row items-center space-x-4 justify-center my-6">
                            <img src="https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2Fc5abdf5b483cbd13db01035181caa69c.1000x1000x1.png" alt="Blog Title" className="max-w-72 rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-2xl font-bold">Kishi Bashi - I Am the Antichrist to You</h1>
                                <p className="py-2">Find of the Month - Kishi Bashi - I Am the Antichrist to You</p>
                                <label htmlFor="my_modal_1" className="btn text-white border-none bg-violet-900 btn-primary">Click to View</label>
                            </div>
                        </div>
                    </div>
                </div>

                <input type="checkbox" id="my_modal_3" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <img src="https://t2.genius.com/unsafe/272x272/https%3A%2F%2Fimages.genius.com%2Fc5abdf5b483cbd13db01035181caa69c.1000x1000x1.png" alt="Description of the image" className="w-full h-auto rounded-xl" />
                        <h3 className="text-lg font-bold underline mt-4">Kishi Bashi - I Am the Antichrist to You</h3>
                        <p className="py-4">This is a new find for us at Tuneo. The song was featured in a episode of Rick & Morty according to google, which could be the reason for it's popularity. But we have not heard much about this song before. Atleast not enough. If your ears have not been exposed to this song yet, please do yourself a favor and listen.</p>
                        <p className="btn text-white border-none bg-violet-900 btn-primary">Rating - 8.5/10</p>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_3">Close</label>
                </div>
            </div>

        </div>
    );
};

export default BlogMain;
