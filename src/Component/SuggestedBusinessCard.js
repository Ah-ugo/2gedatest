import React from "react";

export default function SuggestedBusinessCard({ img, name, location, date }) {
  return (
    <div>
      <div className="flex justify-between w-full max-h-16">
        <div className="flex gap-2 align-middle items-center">
          <img
            src={img ? img : "https://via.placeholder.com/66x68"}
            className="max-w-16 h-16 rounded-lg"
          />
          <div className="flex flex-col">
            <span className="text-black text-opacity-70 text-base font-medium font-['Ubuntu']">
              {name ? name : "Business Page 1"}
            </span>
            <span className="text-black text-opacity-70 text-xs font-normal font-['Ubuntu']">
              {location ? location : "Lagos | Nigeria"}
            </span>
            <span className="text-black text-opacity-70 text-xs font-normal font-['Ubuntu']">
              {date ? `Estd. ${date}` : " Estd. 2011"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="11"
              viewBox="0 0 52 11"
              fill="none">
              <path
                d="M19.5436 4.53161C19.5028 4.40336 19.4243 4.29042 19.3182 4.2076C19.2121 4.12477 19.0835 4.07594 18.9492 4.06749L16.5309 3.90057L15.6353 1.64106C15.5864 1.51664 15.5012 1.40977 15.3909 1.33428C15.2806 1.2588 15.1501 1.21817 15.0164 1.21765C14.8828 1.21817 14.7523 1.2588 14.642 1.33428C14.5316 1.40977 14.4465 1.51664 14.3976 1.64106L13.4857 3.91278L11.0837 4.06749C10.9495 4.07649 10.8212 4.12553 10.7152 4.20827C10.6092 4.29101 10.5305 4.40365 10.4893 4.53161C10.4469 4.66153 10.4444 4.80116 10.4822 4.9325C10.5199 5.06384 10.5961 5.18087 10.701 5.26849L12.5493 6.83183L11.9997 8.99364C11.9617 9.13989 11.9685 9.29419 12.0193 9.43649C12.0701 9.5788 12.1626 9.70253 12.2847 9.7916C12.4031 9.87663 12.5443 9.92438 12.6901 9.92874C12.8359 9.93309 12.9796 9.89384 13.103 9.81602L15.0124 8.60688H15.0205L17.0765 9.90559C17.1819 9.97412 17.3049 10.0109 17.4307 10.0114C17.5334 10.0106 17.6345 9.98629 17.7263 9.94028C17.8181 9.89427 17.8982 9.82783 17.9603 9.74605C18.0224 9.66427 18.065 9.56933 18.0847 9.46854C18.1044 9.36775 18.1007 9.26378 18.0739 9.16463L17.4917 6.79926L19.3319 5.26849C19.4368 5.18087 19.513 5.06384 19.5507 4.9325C19.5884 4.80116 19.586 4.66153 19.5436 4.53161Z"
                fill="#FF5722"
              />
              <path
                d="M9.77164 4.53167C9.73087 4.40342 9.65231 4.29048 9.54624 4.20766C9.44017 4.12484 9.31155 4.076 9.17724 4.06755L6.75895 3.90063L5.86329 1.64112C5.81438 1.5167 5.72925 1.40983 5.61892 1.33435C5.50859 1.25886 5.37814 1.21823 5.24446 1.21771C5.11078 1.21823 4.98033 1.25886 4.87001 1.33435C4.75968 1.40983 4.67455 1.5167 4.62564 1.64112L3.71369 3.91285L1.31169 4.06755C1.17754 4.07655 1.04918 4.12559 0.943216 4.20833C0.837248 4.29107 0.758546 4.40371 0.717291 4.53167C0.674927 4.66159 0.672451 4.80122 0.710185 4.93256C0.747918 5.0639 0.82413 5.18093 0.928994 5.26855L2.77732 6.83189L2.22771 8.9937C2.18968 9.13995 2.19652 9.29425 2.24735 9.43655C2.29817 9.57886 2.39062 9.70259 2.51269 9.79166C2.63117 9.87669 2.77234 9.92445 2.91812 9.9288C3.06389 9.93315 3.20765 9.8939 3.331 9.81608L5.24039 8.60694H5.24854L7.30449 9.90565C7.40995 9.97419 7.53291 10.0109 7.65868 10.0115C7.76138 10.0107 7.86252 9.98635 7.95434 9.94034C8.04616 9.89433 8.1262 9.82789 8.18832 9.74611C8.25044 9.66433 8.29299 9.56939 8.31268 9.4686C8.33238 9.36781 8.3287 9.26384 8.30193 9.16469L7.71975 6.79933L9.55993 5.26855C9.6648 5.18093 9.74101 5.0639 9.77874 4.93256C9.81648 4.80122 9.814 4.66159 9.77164 4.53167Z"
                fill="#FF5722"
              />
              <path
                d="M29.9655 4.53161C29.9247 4.40336 29.8462 4.29042 29.7401 4.2076C29.634 4.12477 29.5054 4.07594 29.3711 4.06749L26.9528 3.90057L26.0571 1.64106C26.0082 1.51664 25.9231 1.40977 25.8128 1.33428C25.7024 1.2588 25.572 1.21817 25.4383 1.21765C25.3046 1.21817 25.1742 1.2588 25.0639 1.33428C24.9535 1.40977 24.8684 1.51664 24.8195 1.64106L23.9075 3.91278L21.5055 4.06749C21.3714 4.07649 21.243 4.12553 21.1371 4.20827C21.0311 4.29101 20.9524 4.40365 20.9111 4.53161C20.8688 4.66153 20.8663 4.80116 20.904 4.9325C20.9418 5.06384 21.018 5.18087 21.1228 5.26849L22.9712 6.83183L22.4216 8.99364C22.3835 9.13989 22.3904 9.29419 22.4412 9.43649C22.492 9.5788 22.5845 9.70253 22.7065 9.7916C22.825 9.87663 22.9662 9.92438 23.112 9.92874C23.2577 9.93309 23.4015 9.89384 23.5248 9.81602L25.4342 8.60688H25.4424L27.4983 9.90559C27.6038 9.97412 27.7268 10.0109 27.8525 10.0114C27.9552 10.0106 28.0564 9.98629 28.1482 9.94028C28.24 9.89427 28.32 9.82783 28.3822 9.74605C28.4443 9.66427 28.4868 9.56933 28.5065 9.46854C28.5262 9.36775 28.5225 9.26378 28.4958 9.16463L27.9136 6.79926L29.7538 5.26849C29.8586 5.18087 29.9349 5.06384 29.9726 4.9325C30.0103 4.80116 30.0078 4.66153 29.9655 4.53161Z"
                fill="#FF5722"
              />
              <path
                d="M40.3883 4.53161C40.3476 4.40336 40.269 4.29042 40.1629 4.2076C40.0569 4.12477 39.9282 4.07594 39.7939 4.06749L37.3756 3.90057L36.48 1.64106C36.4311 1.51664 36.3459 1.40977 36.2356 1.33428C36.1253 1.2588 35.9948 1.21817 35.8612 1.21765C35.7275 1.21817 35.597 1.2588 35.4867 1.33428C35.3764 1.40977 35.2912 1.51664 35.2423 1.64106L34.3304 3.91278L31.9284 4.06749C31.7942 4.07649 31.6659 4.12553 31.5599 4.20827C31.4539 4.29101 31.3752 4.40365 31.334 4.53161C31.2916 4.66153 31.2892 4.80116 31.3269 4.9325C31.3646 5.06384 31.4408 5.18087 31.5457 5.26849L33.394 6.83183L32.8444 8.99364C32.8064 9.13989 32.8132 9.29419 32.864 9.43649C32.9149 9.5788 33.0073 9.70253 33.1294 9.7916C33.2479 9.87663 33.389 9.92438 33.5348 9.92874C33.6806 9.93309 33.8244 9.89384 33.9477 9.81602L35.8571 8.60688H35.8652L37.9212 9.90559C38.0267 9.97412 38.1496 10.0109 38.2754 10.0114C38.3781 10.0106 38.4792 9.98629 38.571 9.94028C38.6629 9.89427 38.7429 9.82783 38.805 9.74605C38.8671 9.66427 38.9097 9.56933 38.9294 9.46854C38.9491 9.36775 38.9454 9.26378 38.9186 9.16463L38.3365 6.79926L40.1766 5.26849C40.2815 5.18087 40.3577 5.06384 40.3954 4.9325C40.4332 4.80116 40.4307 4.66153 40.3883 4.53161Z"
                fill="#FF5722"
              />
              <path
                d="M46.4623 8.33001L48.5142 9.6328C48.7788 9.79972 49.1045 9.55137 49.0272 9.24603L48.4328 6.90917C48.4167 6.84439 48.4193 6.77639 48.4402 6.71301C48.461 6.64962 48.4994 6.59343 48.5508 6.5509L50.391 5.01606C50.6312 4.81657 50.5091 4.41352 50.1956 4.39316L47.7936 4.23846C47.7281 4.23465 47.6651 4.21182 47.6123 4.17278C47.5595 4.13374 47.5192 4.08017 47.4964 4.01861L46.6007 1.76317C46.577 1.69799 46.5338 1.64169 46.477 1.6019C46.4202 1.56211 46.3525 1.54077 46.2832 1.54077C46.2138 1.54077 46.1462 1.56211 46.0893 1.6019C46.0325 1.64169 45.9893 1.69799 45.9656 1.76317L45.07 4.01861C45.0471 4.08017 45.0069 4.13374 44.9541 4.17278C44.9013 4.21182 44.8383 4.23465 44.7728 4.23846L42.3708 4.39316C42.0573 4.41352 41.9352 4.81657 42.1754 5.01606L44.0155 6.5509C44.067 6.59343 44.1053 6.64962 44.1262 6.71301C44.1471 6.77639 44.1497 6.84439 44.1336 6.90917L43.584 9.07504C43.4903 9.44145 43.8812 9.73865 44.1947 9.53916L46.1041 8.33001C46.1576 8.29597 46.2197 8.27788 46.2832 8.27788C46.3466 8.27788 46.4088 8.29597 46.4623 8.33001V8.33001Z"
                stroke="#FF5722"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-black text-opacity-70 text-xs font-light font-['Ubuntu']">
              Average rating : 4.5
            </span>
          </div>
        </div>
        <button className="w-24 flex items-center justify-center h-5 bg-violet-900 rounded-lg border">
          <span className="text-white text-xs font-normal font-['Ubuntu']">
            Stick
          </span>
        </button>
      </div>
    </div>
  );
}