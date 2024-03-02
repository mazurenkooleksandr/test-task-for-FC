const cardsContainer = document.getElementById("cards");
const promoContainer = document.querySelector(".promo-container");
const promoContainerRotate = document.querySelector(".promo-container-rotate");
const screenWidth = window.innerWidth;

const userAgent = navigator.userAgent;
let browserName = userAgent
  .match(/(opera|chrome|safari|firefox|edge|trident(?=\/))\/?\s*(\d+)/i)?.[1]
  .toLowerCase();

const fetchData = async () => {
  try {
    const response = await fetch("https://veryfast.io/t/front_test_api.php");
    return (await response.json()).result.elements;
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const cards = await fetchData();
    cards.forEach(createCardElement);
    if (screenWidth >= 1100) {
      let promoDisplayed = false;
      const downloadLinks = document.querySelectorAll(".download-link");
      downloadLinks.forEach((downloadLink) => {
        downloadLink.addEventListener("click", () => {
          if (!promoDisplayed) {
            setTimeout(() => {
              if (browserName === "chrome") {
                createPromoContainer("rotate");
              } else {
                createPromoContainer("normal");
              }
              promoDisplayed = true;
            }, 1500);
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
});

const halfPriceIconSvg = `<svg width="100" height="102" viewBox="0 0 100 102" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M71.3128 22.1769L79.2505 14.2994H79.1113L71.3128 22.1769Z" fill="url(#paint0_linear_901_41)"/>
    <path d="M83.1497 10.22L79.2505 14.1588H100L94.0119 8.25065C94.0119 8.25065 91.0875 5.99994 88.8593 6.14061C86.6312 6.42195 83.1497 10.22 83.1497 10.22Z" fill="url(#paint1_linear_901_41)"/>
    <path d="M85.9349 5.8593C78.1365 5.43729 43.1826 0.232535 43.1826 0.232535C43.1826 0.232535 36.4982 -1.03349 32.3205 2.34257L3.2155 31.7424C3.2155 31.7424 -0.822992 34.9778 0.151816 43.84C1.12662 52.7021 5.72215 86.0407 5.72215 86.0407C5.72215 86.0407 6.13992 92.2302 7.81102 94.9029C5.44363 88.0101 10.0392 84.212 10.0392 84.212L13.9384 80.1326L71.3128 22.0363L79.1113 14.1588H79.2505L83.289 10.22C83.289 10.22 85.6564 7.40666 88.9986 6.14064C88.0238 5.99997 87.049 5.99997 85.9349 5.8593Z" fill="url(#paint2_linear_901_41)"/>
    <path d="M7.81103 94.9029C7.95029 95.1842 8.08955 95.3249 8.2288 95.4656C10.3177 97.5756 13.9384 101.374 13.9384 101.374V80.1326L10.0391 84.212C10.0391 84.212 5.44366 88.1508 7.81103 94.9029Z" fill="url(#paint3_linear_901_41)"/>
    <path opacity="0.3" d="M33.9916 2.20192L82.3142 7.96942L39.8404 1.49857C39.8404 1.49857 37.0553 0.935888 33.9916 2.20192Z" fill="white"/>
    <path d="M40.8152 41.8706C41.5115 42.5739 41.9293 43.418 42.2078 44.1213C42.4863 44.9653 42.4863 45.6687 42.3471 46.372C42.2078 47.0754 41.79 47.7787 41.233 48.3414C40.676 48.9041 39.9797 49.3261 39.2834 49.4668C38.5871 49.6074 37.8908 49.6074 37.0552 49.1854C36.3589 48.9041 35.5234 48.3414 34.9664 47.6381L34.4093 47.0754C33.713 46.372 33.2953 45.6687 33.0167 44.8247C32.7382 43.9806 32.7382 43.2773 32.8775 42.5739C33.0167 41.8706 33.4345 41.1672 33.9916 40.6046C34.5486 40.0419 35.2449 39.6199 35.9412 39.4792C36.6375 39.3385 37.473 39.3385 38.1693 39.7606C38.8656 40.0419 39.7012 40.6046 40.3974 41.3079L40.8152 41.8706ZM39.4226 42.2926C38.5871 41.4486 37.7515 40.8859 36.916 40.7452C36.0804 40.6046 35.3841 40.8859 34.8271 41.4486C34.2701 42.0113 33.9916 42.7146 33.9916 43.5586C34.1308 44.4027 34.5486 45.2467 35.3841 46.0907L35.9412 46.6534C36.7767 47.4974 37.6123 48.0601 38.4478 48.2007C39.2834 48.3414 39.9797 48.0601 40.676 47.4974C41.3723 46.9347 41.5115 46.2314 41.5115 45.3873C41.3723 44.5433 40.9545 43.6993 40.1189 42.8553L39.4226 42.2926Z" fill="white"/>
    <path d="M46.5248 36.6659L43.4611 39.62L46.5248 42.8554L45.55 43.8401L38.4478 36.3846L43.0433 31.8831L43.7396 32.7271L40.1189 36.2439L42.4863 38.776L45.55 35.8219L46.5248 36.6659Z" fill="white"/>
    <path d="M52.2344 31.1798L49.1707 34.1338L52.2344 37.3692L51.2596 38.3539L44.1574 30.8984L48.7529 26.397L49.4492 27.241L45.9678 30.7578L48.3352 33.2898L51.3988 30.3358L52.2344 31.1798Z" fill="white"/>
    <path d="M34.6878 12.3301L36.916 14.7215C37.473 15.2842 37.8908 15.8468 38.03 16.2688C38.1693 16.6908 38.1693 17.2535 38.03 17.8162C37.8908 18.3789 37.473 19.0822 36.916 19.6449C36.2197 20.3482 35.5234 20.7702 34.9664 20.9109C34.4093 21.0516 33.8523 21.0516 33.4345 20.9109C33.0167 20.7702 32.4597 20.3482 32.0419 19.7856L29.6745 17.2535C28.9782 16.5502 28.5605 15.9875 28.4212 15.5655C28.282 15.1435 28.282 14.5808 28.4212 14.0181C28.5605 13.4555 28.9783 12.8928 29.5353 12.3301C30.2316 11.7674 30.7886 11.3454 31.4849 11.2048C32.0419 11.0641 32.599 11.0641 33.0167 11.2048C33.4345 11.2048 33.9916 11.6268 34.6878 12.3301ZM31.9027 13.7368C31.4849 13.3148 31.3456 13.1741 31.2064 13.1741C31.0671 13.1741 30.9279 13.1741 30.7886 13.3148C30.6494 13.4555 30.5101 13.5961 30.6494 13.7368C30.6494 13.8775 30.9279 14.1588 31.2064 14.4401L34.5486 17.9569C34.9664 18.3789 35.2449 18.5195 35.2449 18.6602C35.3841 18.6602 35.5234 18.6602 35.6627 18.5195C35.8019 18.3789 35.8019 18.2382 35.8019 18.0975C35.8019 17.9569 35.5234 17.6755 35.2449 17.3942L31.9027 13.7368ZM36.0804 5.71869L44.4359 25.2716L43.1826 26.5377L34.8271 6.98471L36.0804 5.71869ZM47.3604 12.7521L49.5885 15.1435C50.1455 15.7062 50.5633 16.2688 50.7026 16.6909C50.8418 17.1129 50.8418 17.6755 50.7026 18.2382C50.5633 18.8009 50.1455 19.5042 49.5885 20.0669C48.8922 20.7702 48.1959 21.1922 47.6389 21.3329C47.0818 21.4736 46.5248 21.4736 46.107 21.3329C45.6893 21.1922 45.1322 20.7702 44.7144 20.2076L42.3471 17.6755C41.6508 16.9722 41.233 16.4095 41.0937 15.9875C40.9545 15.5655 40.9545 15.0028 41.0937 14.4401C41.233 13.8775 41.6508 13.3148 42.2078 12.7521C42.9041 12.1895 43.4611 11.7674 44.1574 11.6268C44.7145 11.4861 45.2715 11.4861 45.6893 11.6268C46.107 11.7674 46.6641 12.1895 47.3604 12.7521ZM44.5752 14.2995C44.1574 13.8775 44.0182 13.7368 43.8789 13.7368C43.7396 13.7368 43.6004 13.7368 43.4611 13.8775C43.3219 14.0181 43.1826 14.1588 43.3219 14.2995C43.3219 14.4402 43.6004 14.7215 43.8789 15.0028L47.2211 18.5195C47.6389 18.9415 47.7781 19.0822 47.9174 19.2229C48.0567 19.2229 48.1959 19.2229 48.3352 19.0822C48.4744 18.9415 48.6137 18.8009 48.4744 18.6602C48.4744 18.5195 48.1959 18.2382 47.9174 17.9569L44.5752 14.2995Z" fill="white"/>
    <path d="M24.1042 45.3874C22.8509 45.5281 21.7368 44.9654 20.6228 43.84L18.5339 41.73L21.4583 38.7759L22.7116 40.042C23.1294 40.464 23.6865 40.886 23.965 41.0266C24.3828 41.1673 24.6613 41.1673 24.9398 40.886C25.2183 40.6046 25.3576 40.3233 25.2183 40.042C25.079 39.7606 24.9398 39.4793 24.522 39.0573L21.7368 36.2439C21.3191 35.8219 20.9013 35.3999 20.4835 35.2592C20.0657 35.1185 19.7872 35.1185 19.5087 35.3999C18.9517 35.9625 19.0909 36.6659 19.9265 37.3692L17.2806 40.042L9.76062 32.4458L16.7235 25.4124L19.3694 28.0851L15.331 32.3051L17.2806 34.2745C17.2806 33.9932 17.2806 33.5712 17.4198 33.2898C17.5591 32.8678 17.6983 32.5865 18.1161 32.3051C19.3694 31.0391 20.4835 30.7578 21.8761 31.1798C23.1294 31.6018 24.522 32.5865 26.0539 34.1338C27.3072 35.3999 28.282 36.5252 28.839 37.5099C29.3961 38.4946 29.6746 39.4793 29.5353 40.464C29.3961 41.4486 28.839 42.574 27.725 43.5587C26.6109 44.684 25.3576 45.2467 24.1042 45.3874Z" fill="#FFFDFD"/>
    <path d="M32.042 36.9472C30.6494 36.9472 29.3961 36.2439 28.1427 34.9778L21.7368 28.5071C20.3443 27.1004 19.648 25.8343 19.648 24.4277C19.5087 23.021 20.205 21.7549 21.4583 20.4889C22.7117 19.2229 23.965 18.6602 25.3576 18.6602C26.7501 18.6602 28.0035 19.5042 29.3961 20.7703L35.8019 27.241C37.0553 28.5071 37.7516 29.7731 37.7516 31.1798C37.7516 32.5865 37.1945 33.8525 35.9412 34.9778C34.6879 36.3845 33.4345 36.9472 32.042 36.9472ZM33.4345 31.7424C33.4345 31.4611 33.156 31.1798 33.0168 30.8984L26.0539 23.7243C25.6361 23.3023 25.3576 23.021 24.9398 22.8803C24.6613 22.7396 24.3828 22.8803 24.1042 23.1616C23.8257 23.443 23.6865 23.7243 23.8257 24.0056C23.965 24.287 24.2435 24.709 24.6613 25.131L31.6242 32.3051C31.9027 32.5865 32.1812 32.7271 32.4597 32.8678C32.7383 32.8678 33.0168 32.8678 33.2953 32.5865C33.4345 32.3051 33.5738 32.0238 33.4345 31.7424Z" fill="#FFFDFD"/>
    <defs>
    <linearGradient id="paint0_linear_901_41" x1="71.2659" y1="18.1838" x2="79.2079" y2="18.1838" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E40210"/>
    <stop offset="1" stop-color="#660027"/>
    </linearGradient>
    <linearGradient id="paint1_linear_901_41" x1="79.2079" y1="10.2117" x2="99.9752" y2="10.2117" gradientUnits="userSpaceOnUse">
    <stop offset="0.503" stop-color="#660027"/>
    <stop offset="1" stop-color="#E40210"/>
    </linearGradient>
    <linearGradient id="paint2_linear_901_41" x1="1.50248" y1="51.7412" x2="88.8143" y2="35.073" gradientUnits="userSpaceOnUse">
    <stop stop-color="#E40210"/>
    <stop offset="0.0666482" stop-color="#7B0022"/>
    <stop offset="0.4147" stop-color="#FF0000"/>
    <stop offset="0.5146" stop-color="#FF0505"/>
    <stop offset="0.6321" stop-color="#FF1313"/>
    <stop offset="0.758" stop-color="#FF2B2B"/>
    <stop offset="0.786" stop-color="#FF3131"/>
    <stop offset="1" stop-color="#F40106"/>
    </linearGradient>
    <linearGradient id="paint3_linear_901_41" x1="10.5153" y1="83.6368" x2="10.5153" y2="99.5551" gradientUnits="userSpaceOnUse">
    <stop offset="0.2551" stop-color="#660027"/>
    <stop offset="1" stop-color="#E40210"/>
    </linearGradient>
    </defs>
    </svg>
`;

const downloadArrowIconSvg = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 0C6.72517 0 0 6.71012 0 15C0 23.2899 6.71013 30 15 30C23.2899 30 30 23.2899 30 15C30 6.71012 23.2748 0 15 0ZM12.2768 14.6239H13.2547C13.4654 14.6239 13.6459 14.4584 13.6459 14.2327V8.33501C13.6459 8.12438 13.8114 7.94382 14.0371 7.94382H15.9629C16.1735 7.94382 16.3541 8.10933 16.3541 8.33501V14.2327C16.3541 14.4433 16.5195 14.6239 16.7452 14.6239H17.7231C18.0391 14.6239 18.2196 15 18.0241 15.2558L15.3009 18.671C15.1505 18.8666 14.8495 18.8666 14.6991 18.671L11.991 15.2558C11.7803 15 11.9609 14.6239 12.2768 14.6239ZM23.5155 20.2507V21.65C23.5155 21.8606 23.3501 22.0411 23.1244 22.0411H8.39516H6.86056C6.64993 22.0411 6.46941 21.8756 6.46941 21.65V20.2507V16.4443C6.46941 16.2337 6.63489 16.0532 6.86056 16.0532H8.00401C8.21464 16.0532 8.39516 16.2186 8.39516 16.4443V19.8596C8.39516 20.0702 8.56067 20.2507 8.78635 20.2507H21.1534C21.3641 20.2507 21.5446 20.0853 21.5446 19.8596V16.4443C21.5446 16.2337 21.7101 16.0532 21.9358 16.0532H23.1394C23.35 16.0532 23.5306 16.2186 23.5306 16.4443V20.2507H23.5155Z" fill="white"/>
    </svg>
`;

const getAmountLabel = (license) =>
  license.toLowerCase().includes("monthly") ? "mo" : "per year";

const getFullPrice = (amount) => amount.match(/\$\d+\.\d{2}/)?.[0] ?? null;

const determineHalfPriceIcon = (price) =>
  price === "50%" ? halfPriceIconSvg : "";

const determineBestValueLabel = (value) => (value ? "best-value-label" : null);

function createCardElement({
  link,
  amount,
  is_best,
  name_prod,
  price_key,
  license_name,
  amount_html = "",
}) {
  const downloadContent = `<span>download</span><span>${downloadArrowIconSvg}</span>`;

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  const cardBlock = document.createElement("div");
  cardBlock.classList.add("card-block");

  const priceBlock = document.createElement("div");
  priceBlock.classList.add("price-block");
  priceBlock.classList.add(determineBestValueLabel(is_best));

  const priceParagraph = document.createElement("p");
  priceParagraph.classList.add("price-paragraph");

  const amountSpan = document.createElement("span");
  amountSpan.textContent = `$${amount}`;

  const amountLabelSpan = document.createElement("span");
  amountLabelSpan.innerHTML = `/${getAmountLabel(
    license_name
  )}${determineHalfPriceIcon(price_key)}`;

  const fullPrice = document.createElement("p");
  fullPrice.classList.add("full-price");
  fullPrice.textContent = getFullPrice(amount_html);

  const nameProdParagraph = document.createElement("p");
  nameProdParagraph.textContent = name_prod;

  const licenseNameParagraph = document.createElement("p");
  licenseNameParagraph.textContent = license_name;

  const downloadLink = document.createElement("a");
  downloadLink.href = link;
  downloadLink.download = true;
  downloadLink.classList.add("download-link");
  downloadLink.innerHTML = downloadContent;

  priceParagraph.appendChild(amountSpan);
  priceParagraph.appendChild(amountLabelSpan);
  priceBlock.appendChild(priceParagraph);
  priceBlock.appendChild(fullPrice);
  cardBlock.appendChild(priceBlock);
  cardBlock.appendChild(nameProdParagraph);
  cardBlock.appendChild(licenseNameParagraph);
  cardBlock.appendChild(downloadLink);
  cardContainer.appendChild(cardBlock);
  cardsContainer.appendChild(cardContainer);
}

function createPromoContainer(type) {
  const polygon = document.createElement("div");
  polygon.classList.add("polygon");

  const rectangle = document.createElement("div");
  rectangle.classList.add(
    (type === "normal" && "rectangle") ||
      (type === "rotate" && "rectangle-rotate")
  );

  const rectangleTitle = document.createElement("p");
  rectangleTitle.classList.add("rectangle-title");
  rectangleTitle.textContent = "OPEN";

  const rectangleSubtitle = document.createElement("p");
  rectangleSubtitle.classList.add("rectangle-subtitle");
  rectangleSubtitle.textContent = "your downloaded file";

  rectangle.appendChild(rectangleTitle);
  rectangle.appendChild(rectangleSubtitle);

  if (type === "normal") {
    promoContainer.appendChild(polygon);
    promoContainer.appendChild(rectangle);
    promoContainer.style.display = "block";
  } else if (type === "rotate") {
    promoContainerRotate.appendChild(polygon);
    promoContainerRotate.appendChild(rectangle);
    promoContainerRotate.style.display = "block";
  }
}
