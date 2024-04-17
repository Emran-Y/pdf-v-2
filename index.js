import PDFDocument from 'pdfkit';
import axios from 'axios';
import blobStream from 'blob-stream';
import fs from 'fs';
import path from 'path';


async function downloadImageToBuffer(url) {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  return Buffer.from(response.data, 'binary');
}



async function generatePDF(

  {
    address1 = "",
    address2 = "",
    address3 = "",
    address4 = "",
    city = "",
    country = "",
    postCode = "",
    noAcPoints = 0,
    noDcPoints = 0,
    makeOfChargePoint = "",
    ampsPerCp = "",
    kwPerCp = "",
    wallMountSingle = 0,
    wallMountDual = 0,
    floorMountSingle = 0,
    floorMountDual = 0,
    phaseType = "",
    mainsFuseSize = "",
    mainsIsolation = "",
    earthingSetup = "",
    mobileSignal = "",
    signalStrength = "",
    consumerUnitMake = "",
    consumerUnitModel = "",
    totalSpareWays = "",
    totalAmpsInUse = "",
    cableSizeRead = "",
    cableLengthTotal = "",
    totalCableRuns = "",
    internalCableAttachment = "",
    dataCableRun = "",
    cableRunDescription = "",
    selectOptions = "",
    gwLength = "",
    gwWidth = "",
    gwDepth = "",
    ductingSize = "",
    ductingLength = "",
    groundWorksDescription = "",
    installationEarthingSetup = "",
    url = ''
  }
  
) {
  // Create a new PDF document
  const doc = new PDFDocument({
    size: 'A4', // 8.5 x 11 in inches (letter size)
  });

  // const stream = doc.pipe(blobStream());

  const writableStream = fs.createWriteStream('output.pdf');
  doc.pipe(writableStream);

  // logo image
  const pageWidth = doc.page.width;
  const imageWidth = 200;
  const centerX = (pageWidth - imageWidth) / 2;
  doc.image('logo.png', centerX, 50, { width: 200 });

  doc.moveDown(5);

  // Title
  doc.font('Helvetica-Bold').fontSize(20).text('Address Details', { align: 'center' });

  // add Address 1 and Address 2
  doc.fontSize(13).font('./fonts/Karla-Bold.ttf').text('Address 1: (street/road name)', 70, 200).fontSize(13);
  doc.fontSize(13).text('Address 2: (street/road name)', 330, 200).fontSize(13);

  // Reset font and color for regular text
  doc.fontSize(12).fillColor('#B0ADAD').font('./fonts/Karla-Bold.ttf');

  // Draw rectangles with rounded corners for the values
  doc.roundedRect(80, 230, 200, 30, 5).fill('#f5f5f3').stroke(); // For Address 1
  doc.roundedRect(340, 230, 200, 30, 5).fill('#f5f5f3').stroke(); // For Address 2

  // Additional details for Address 1 and Address 2
  doc.fillColor('#4F4A4A').text(`${address1}`, 90, 240);
  doc.fillColor('#4F4A4A').text(`${address2}`, 350, 240);

  // add address 3 and address 4
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Address 1: (street/road name)`, 70, 300);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Address 1: (street/road name)`, 330, 300);

  doc.roundedRect(80, 330, 200, 30, 5).fill('#f5f5f3').stroke(); // For Address 3
  doc.roundedRect(340, 330, 200, 30, 5).fill('#f5f5f3').stroke(); // For Address 4

  // Additional details for Address 3 and Address 4
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${address3}`, 90, 340);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${address4}`, 350, 340);

  // add city and country
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`City:`, 70, 400);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Country:`, 330, 400);

  doc.roundedRect(80, 430, 200, 30, 5).fill('#f5f5f3').stroke(); // For City
  doc.roundedRect(340, 430, 200, 30, 5).fill('#f5f5f3').stroke(); // For Country

  // Additional details for City and Country
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${city}`, 90, 440);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${country}`, 350, 440);

  //add passcode and phone number

  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Postcode:`, 70, 500);

  doc.roundedRect(80, 530, 470, 30, 5).fill('#f5f5f3').stroke(); // For Passcode

  // Additional details for Passcode and Phone Number
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${postCode}`, 90, 540);




  // Charging Info

  // Title
  doc.moveDown(14);
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Charger Info', { align: 'center' });


  // add no of AC and DC points
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`No of AC Points:`, 70, 140);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`No of DC Points:`, 330, 140);

  doc.roundedRect(80, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For No of AC Points
  doc.roundedRect(340, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For No of DC Points

  // Additional details for No of AC and DC Points
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${noAcPoints}`, 90, 180);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${noDcPoints}`, 350, 180);

  // add make of charge point and amps per cp
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Make of Charge Point:`, 70, 240);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Amps per CP:`, 330, 240);

  doc.roundedRect(80, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For Make of Charge Point
  doc.roundedRect(340, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For Amps per CP

  // Additional details for Make of Charge Point and Amps per CP
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${makeOfChargePoint}`, 90, 280);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${ampsPerCp}`, 350, 280);


  // add kw per cp and city
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`KW per CP:`, 70, 340);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`City:`, 330, 340);

  doc.roundedRect(80, 370, 200, 30, 5).fill('#f5f5f3').stroke(); // For KW per CP
  doc.roundedRect(340, 370, 200, 30, 5).fill('#f5f5f3').stroke(); // For City

  // Additional details for KW per CP and City
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${kwPerCp}`, 90, 380);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${city}`, 350, 380);


  // add wall mount single and dual
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Wall Mount Single:`, 70, 440);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Wall Mount Dual:`, 330, 440);

  doc.roundedRect(80, 470, 200, 30, 5).fill('#f5f5f3').stroke(); // For Wall Mount Single
  doc.roundedRect(340, 470, 200, 30, 5).fill('#f5f5f3').stroke(); // For Wall Mount Dual

  // Additional details for Wall Mount Single and Wall Mount Dual
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${wallMountSingle}`, 90, 480);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${wallMountDual}`, 350, 480);


  // floor mount single and dual
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Floor Mount Single:`, 70, 540);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Floor Mount Dual:`, 330, 540);

  doc.roundedRect(80, 570, 200, 30, 5).fill('#f5f5f3').stroke(); // For Floor Mount Single
  doc.roundedRect(340, 570, 200, 30, 5).fill('#f5f5f3').stroke(); // For Floor Mount Dual

  // Additional details for Floor Mount Single and Floor Mount Dual
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${floorMountSingle}`, 90, 580);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${floorMountDual}`, 350, 580);





  // Site Electrical Set Up

  // Title
  // Calculate the x-coordinate for center alignment
  const centerTX = doc.page.width / 2;
  // Title
  doc.moveDown(14);
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Site Electrical Set Up', 200);

  // add phase type and mains fuse size
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Phase Type:`, 70, 140);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Mains Fuse Size:`, 330, 140);

  doc.roundedRect(80, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For Phase Type
  doc.roundedRect(340, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For Mains Fuse Size

  // Additional details for Phase Type and Mains Fuse Size
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${phaseType}`, 90, 180);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${mainsFuseSize}`, 350, 180);

 

  // add mains isolation and earthing setup
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Mains Isolation:`, 70, 240);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Earthing Setup:`, 330, 240);

  doc.roundedRect(80, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For Mains Isolation
  doc.roundedRect(340, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For Earthing Setup

  // Additional details for Mains Isolation and Earthing Setup
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${mainsIsolation}`, 90, 280);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${earthingSetup}`, 350, 280);



  // add mobile signal and signal strength
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Mobile Signal:`, 70, 340);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Signal Strength:`, 330, 340);

  doc.roundedRect(80, 370, 200, 30, 5).fill('#f5f5f3').stroke(); // For Mobile Signal
  doc.roundedRect(340, 370, 200, 30, 5).fill('#f5f5f3').stroke(); // For Signal Strength

  // Additional details for Mobile Signal and Signal Strength
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${mobileSignal}`, 90, 380);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${signalStrength}`, 350, 380);


  // consumer unit make and total spare ways
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Consumer Unit Make:`, 70, 440);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Total Spare Ways:`, 330, 440);

  doc.roundedRect(80, 470, 200, 30, 5).fill('#f5f5f3').stroke(); // For Consumer Unit Make
  doc.roundedRect(340, 470, 200, 30, 5).fill('#f5f5f3').stroke(); // For Total Spare Ways

  // Additional details for Consumer Unit Make and Total Spare Ways
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${consumerUnitMake}`, 90, 480);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${totalSpareWays}`, 350, 480);
  


  // total amps in use
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Total Amps in Use:`, 70, 540);

  doc.roundedRect(80, 570, 470, 30, 5).fill('#f5f5f3').stroke(); // For Total Amps in Use

  // Additional details for Total Amps in Use
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${totalAmpsInUse}`, 90, 580);





  // Installation Set Up

  doc.moveDown(14);

  // Title
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Installation Set Up', 230);

  // cable size Reqd. and cable Lenght Total
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Cable Size Reqd.:`, 70, 140);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Cable Length Total:`, 330, 140);

  doc.roundedRect(80, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For Cable Size Reqd.
  doc.roundedRect(340, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For Cable Length Total

  // Additional details for Cable Size Reqd. and Cable Length Total
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${cableSizeRead}`, 90, 180);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${cableLengthTotal}`, 350, 180);



  // total cable runs and Internal Cable Attachements

  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Total Cable Runs:`, 70, 240);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Internal Cable Attachements:`, 330, 240);

  doc.roundedRect(80, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For Total Cable Runs
  doc.roundedRect(340, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For Internal Cable Attachements

  // Additional details for Total Cable Runs and Internal Cable Attachements
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${totalCableRuns}`, 90, 280);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${internalCableAttachment}`, 350, 280);


  // Earthing Set Up and Data Cable Run
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Earthing Set Up:`, 70, 340);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Data Cable Run:`, 330, 340);

  doc.roundedRect(80, 370, 200, 30, 5).fill('#f5f5f3').stroke(); // For Earthing Set Up
  doc.roundedRect(340, 370, 200, 30, 5).fill('#f5f5f3').stroke(); // For Data Cable Run

  // Additional details for Earthing Set Up and Data Cable Run
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${earthingSetup}`, 90, 380);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${dataCableRun}`, 350, 380);


  // Cable Run Description
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Cable Run Description:`, 70, 440);

  doc.roundedRect(80, 470, 470, 100, 5).fill('#f5f5f3').stroke(); // For Cable Run Description

  // Additional details for Cable Run Description
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${cableRunDescription}`, 90, 480);
  

  // Ground Works

  doc.moveDown(20);

  // Title
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Ground Works', 230);

  
  // Select Options and GW Length
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Select Options:`, 70, 140);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`GW Length:`, 330, 140);

  doc.roundedRect(80, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For Select Options
  doc.roundedRect(340, 170, 200, 30, 5).fill('#f5f5f3').stroke(); // For GW Length

  // Additional details for Select Options and GW Length
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${selectOptions}`, 90, 180);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${gwLength}`, 350, 180);


  // GW Width and GW Depth
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`GW Width:`, 70, 240);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`GW Depth:`, 330, 240);

  doc.roundedRect(80, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For GW Width
  doc.roundedRect(340, 270, 200, 30, 5).fill('#f5f5f3').stroke(); // For GW Depth

  // Additional details for GW Width and GW Depth
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${gwWidth}`, 90, 280);
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${gwDepth}`, 350, 280);


  // Ground Works Description

  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Ground Works Description:`, 70, 340);

  doc.roundedRect(80, 370, 470, 100, 5).fill('#f5f5f3').stroke(); // For Ground Works Description

  // Additional details for Ground Works Description
  doc.fillColor('#4F4A4A').fontSize(12).font('Helvetica').text(`${groundWorksDescription}`, 90, 380);

  

  // Images

  // Title

  doc.moveDown(8);
  doc.fontSize(13).font('Helvetica-Bold').fillColor('black').text('Image attachments', 70);


   // Download the image and convert it to a buffer
   const imageBuffer = await downloadImageToBuffer(url);
 
   // Convert the image buffer to a data URI with base64 encoding
   const imageDataURI = `data:image/jpeg;base64,${imageBuffer.toString('base64')}`;
  

  // Image 1
  doc.image(`${imageDataURI}`, 70, 550, { width: 180 ,height: 130});
  doc.image(`${imageDataURI}`,270,550, {width: 180, height: 130});

  // Image 2
  doc.image(`${imageDataURI}`, 70, 690, { width: 180 ,height: 130});
  doc.image(`${imageDataURI}`,270,690, {width: 180, height: 130});

  doc.moveDown(1);
  
  // Finalize the document
  doc.end();

  // return new Promise((resolve, reject) => {
  //   stream.on('finish', () => {
  //     const blob = stream.toBlob('application/pdf'); // Get Blob from blobStream
  //     resolve(blob); // Resolve with the Blob
  //   });

  //   doc.on('error', (err) => {
  //     reject(err); // Reject if there's an error
  //   });
  // });
  writableStream.on('finish', () => {
    console.log('PDF generated successfully!');
  });


}

// Example usage
generatePDF(
  {
    createdById: 123,
    assignedToId: 456,
    status: "Pending",
    address1: "123 Main St",
    address2: "Apt 1",
    city: "Cityville",
    country: "Countryland",
    postCode: "12345",
    noAcPoints: 2,
    noDcPoints: 4,
    makeOfChargePoint: "ChargeX",
    ampsPerCp: "10",
    kwPerCp: "5",
    wallMountSingle: 1,
    wallMountDual: 0,
    floorMountSingle: 2,
    floorMountDual: 1,
    phaseType: "Single-phase",
    mainsFuseSize: "20A",
    mainsIsolation: "Switch",
    earthingSetup: "Grounded",
    mobileSignal: "Good",
    signalStrength: "Strong",
    consumerUnitMake: "UnitX",
    consumerUnitModel: "ModelY",
    totalSpareWays: "10",
    totalAmpsInUse: "40",
    cableSizeRead: "10mm",
    cableLengthTotal: "100m",
    totalCableRuns: "5",
    internalCableAttachment: "Attached",
    dataCableRun: "Yes",
    cableRunDescription: "Description",
    selectOptions: "OptionX",
    gwLength: "10m",
    gwWidth: "5m",
    gwDepth: "2m",
    ductingSize: "Large",
    ductingLength: "50m",
    groundWorksDescription: "GroundWorks",
    installationEarthingSetup: "Grounded",
    url: "https://via.placeholder.com/150/d32776"
  }
)
// .then((blob) => {
//   // Do something with the Blob (e.g., display in browser, download)
//   // Log the Blob object
//   console.log(blob);

  
// })
// .catch((err) => {
//   console.error('Error generating PDF:', err);
// });

