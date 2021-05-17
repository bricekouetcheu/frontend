import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/header';

const Apropos = () => {
    return (
        <>
            <Header />
            <main class="main">

                <Navbar />

                <div class="main__content">

                    <div class="about">
                        <h2 class="second-title mb-4">A Propos de nous</h2>
                        <a data-fancybox href="https://www.youtube.com/watch?v=O3sf1x3zUbI">
                            <button type="button" class="btn-default btn-video">
                                <img src="images/icon/video.svg" alt="icone video" />
                                Regarder Notre video
                            </button>
                        </a>
                        <div class="about__img">
                            <img src="images/children-school.jpg" alt="images" />
                        </div>
                        <div class="about__text">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, obcaecati similique?
                                Quas enim a, recusandae atque magni quam, earum exercitationem natus sed repellat officia
                                tenetur pariatur, necessitatibus modi odio optio.
                                Molestiae repudiandae quo tempore provident accusantium sapiente iure ullam nobis. Vel,
                                culpa ab animi facilis cupiditate amet eaque labore natus. Pariatur accusamus ipsum nulla
                                rem ab provident similique vel consequatur!
                                A, ut minus commodi alias ducimus repellendus tempore delectus iste quod! Exercitationem
                                eveniet odio culpa sint libero facere. Maiores deleniti excepturi, dolor impedit quas porro
                                quidem explicabo officia nobis magni!
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Apropos;