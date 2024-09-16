// function getMetadata(name) {
//   const attr = name && name.includes(':') ? 'property' : 'name';
//   const meta = [...document.querySelectorAll(`meta[${attr}="${name}"]`)]
//     .map((m) => m.content)
//     .join(', ');
//   return meta || '';
// }

// //const aem = "http://localhost:4503";
// //const aem = "https://publish-p107058-e1001010.adobeaemcloud.com";
// const aem = "https://publish-p135360-e1341441.adobeaemcloud.com/";

// export default function decorate(block) {


//   const slugDiv = block.querySelector('div:nth-child(1)'); 
//   const slugID = document.createElement('div');
//   slugID.id = 'slug';
//   slugDiv.replaceWith(slugID);
//   slugID.innerHTML = `${slugDiv.innerHTML}`;
//   //const slugTemp = slugID.innerHTML.replace(/<div>|<\/div>/g, '');
//   //const slug = slugTemp.match(/\S+/g);
//   const slug = slugID.textContent.trim();
  
//   const quoteDiv = block.querySelector('div:last-of-type');
//   const destinationDiv = document.createElement('div');
//   destinationDiv.id = "destination-" + slug; 
//   quoteDiv.replaceWith(destinationDiv);
  
// fetch(aem + '/graphql/execute.json/qatar-airways/destination-by-slug;slug=' + slug)
// .then(response => response.json())
// .then(response => {

// const backgroundImage = response.data.travelDestinationList.items[0].primaryImage._dynamicUrl;
// const imageURL = aem + backgroundImage;
// document.getElementById(destinationDiv.id).innerHTML = "<section><img src=" + imageURL + "></section>";  

// const cityName = response.data.travelDestinationList.items[0].cityName;
// document.getElementById(destinationDiv.id).innerHTML += "<section><h3>"+ cityName + "</h3></section>";

// const cityNickName = response.data.travelDestinationList.items[0].cityNickName;
// document.getElementById(destinationDiv.id).innerHTML += "<section><h3>"+ cityNickName + "</h3></section>";

// const cityDescription = response.data.travelDestinationList.items[0].cityDescription.plaintext;
// document.getElementById(destinationDiv.id).innerHTML += "<section>" + cityDescription + "</section>";
// })
// .catch(error => {
//   console.log('Error fetching data:', error);
// });

// }


console.log("test comment");


