import React from 'react';
import { useEffect } from 'react';

import laptopFrameImage from '../../img/illustrators/laptopFrameImage.png';

import video from '../../videos/intro.mp4';

export default function VideoModal() {
  useEffect(() => {
    //?purpose: Modal trigger on btn click
    // Get DOM Elements
    const modal = document.querySelector('#my-modal');
    const modalBtn = document.querySelector('#modal-btn');
    const closeBtn = document.querySelector('.close');

    // Events
    modalBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', outsideClick);

    // Open
    function openModal() {
      modal.style.display = 'block';
    }

    // Close
    function closeModal() {
      modal.style.display = 'none';
    }

    // Close If Outside Click
    function outsideClick(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    }

    //?purpose: video autoplays on btn click
    var showVideoBtn = document.getElementById('modal-btn');
    function autoplayVideo() {
      var vid = document.getElementById('myVideo');
      vid.autoplay = true;
      vid.load();
    }
    showVideoBtn.addEventListener('click', () => {
      autoplayVideo();
    });
  });

  return (
    <>
      <div id="my-modal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close">&times;</span>

            <div id="modalBody">
              <video id="myVideo" controls>
                <source src={video} type="video/mp4" />
              </video>

              <img
                src={laptopFrameImage}
                alt="laptop frame with video inside it"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
