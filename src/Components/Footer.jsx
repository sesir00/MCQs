import React from 'react';
import "./footer.css";


const Footer = () => {
  return (
    <>
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">QuizGen.com <i> – YOUR AI-POWERED MCQ CREATOR </i> is a cutting-edge tool that uses AI to help educators, students, and content creators generate multiple-choice questions (MCQs) quickly and effectively. With MCQGen, our mission is to streamline the question-creation process by generating accurate, concept-focused MCQs from any text.</p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Legal</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Terms of Service</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Privacy Policy</a></li>
            </ul>

            <h6>Comparisons</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">QuizGen vs Quillionz</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">QuizGen Features in Depth</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
            </ul>

            <h6>FAQs</h6>
            <ul class="footer-links">
              <li><a href="http://scanfcode.com/about/">QuizGen FAQs</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
        <div class="container">
          <div class="row">
              <div class="col-md-8 col-sm-6 col-xs-12">
                <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
                  <a href="#"> QuizGen</a>.
                </p>
              </div>

              <div class="col-md-4 col-sm-6 col-xs-12">
                <ul class="social-icons">
                <li><a class="facebook" href="#"><i class="fab fa-facebook"></i></a></li>
                <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a></li>
                <li><a class="linkedin" href="#"><i class="fab fa-linkedin"></i></a></li> 
                </ul>
              </div>
            </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;