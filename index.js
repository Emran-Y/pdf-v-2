const PDFDocument = require('pdfkit');
const fs = require('fs');

function generatePDF(

  {
    createdById = 0,
    assignedToId = 0,
    status = "",
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
    size: [612, 3500], // 8.5 x 11 in inches (letter size)
  });

  // Pipe the PDF output to a writable stream (in this case, a file)
  const writableStream = fs.createWriteStream('hello_world.pdf');
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
  doc.fontSize(13).text('Address 1: (street/road name)', 70, 200).fontSize(13);
  doc.fontSize(13).text('Address 2: (street/road name)', 330, 200).fontSize(13);

  // Reset font and color for regular text
  doc.fontSize(12).fillColor('#B0ADAD').font('Helvetica');

  // Draw rectangles with rounded corners for the values
  doc.roundedRect(80, 230, 200, 30, 5).fill('#fcfcfc').stroke(); // For Address 1
  doc.roundedRect(340, 230, 200, 30, 5).fill('#fcfcfc').stroke(); // For Address 2

  // Additional details for Address 1 and Address 2
  doc.fillColor('#B0ADAD').text(`${address1}`, 90, 240);
  doc.fillColor('#B0ADAD').text(`${address2}`, 350, 240);

  // add address 3 and address 4
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Address 1: (street/road name)`, 70, 300);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Address 1: (street/road name)`, 330, 300);

  doc.roundedRect(80, 330, 200, 30, 5).fill('#fcfcfc').stroke(); // For Address 3
  doc.roundedRect(340, 330, 200, 30, 5).fill('#fcfcfc').stroke(); // For Address 4

  // Additional details for Address 3 and Address 4
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${address3}`, 90, 340);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${address4}`, 350, 340);

  // add city and country
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`City:`, 70, 400);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Country:`, 330, 400);

  doc.roundedRect(80, 430, 200, 30, 5).fill('#fcfcfc').stroke(); // For City
  doc.roundedRect(340, 430, 200, 30, 5).fill('#fcfcfc').stroke(); // For Country

  // Additional details for City and Country
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${city}`, 90, 440);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${country}`, 350, 440);

  //add passcode and phone number

  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Postcode:`, 70, 500);

  doc.roundedRect(80, 530, 470, 30, 5).fill('#fcfcfc').stroke(); // For Passcode

  // Additional details for Passcode and Phone Number
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${postCode}`, 90, 540);




  // Charging Info

  // Title
  doc.moveDown(4);
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Charger Info', { align: 'center' });


  // add no of AC and DC points
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`No of AC Points:`, 70, 660);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`No of DC Points:`, 330, 660);

  doc.roundedRect(80, 690, 200, 30, 5).fill('#fcfcfc').stroke(); // For No of AC Points
  doc.roundedRect(340, 690, 200, 30, 5).fill('#fcfcfc').stroke(); // For No of DC Points

  // Additional details for No of AC and DC Points
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${noAcPoints}`, 90, 700);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${noDcPoints}`, 350, 700);

  // add make of charge point and amps per cp
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Make of Charge Point:`, 70, 760);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Amps per CP:`, 330, 760);

  doc.roundedRect(80, 790, 200, 30, 5).fill('#fcfcfc').stroke(); // For Make of Charge Point
  doc.roundedRect(340, 790, 200, 30, 5).fill('#fcfcfc').stroke(); // For Amps per CP

  // Additional details for Make of Charge Point and Amps per CP
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${makeOfChargePoint}`, 90, 800);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${ampsPerCp}`, 350, 800);


  // add kw per cp and city
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`KW per CP:`, 70, 860);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`City:`, 330, 860);

  doc.roundedRect(80, 890, 200, 30, 5).fill('#fcfcfc').stroke(); // For KW per CP
  doc.roundedRect(340, 890, 200, 30, 5).fill('#fcfcfc').stroke(); // For City

  // Additional details for KW per CP and City
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${kwPerCp}`, 90, 900);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${city}`, 350, 900);


  // add wall mount single and dual
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Wall Mount Single:`, 70, 960);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Wall Mount Dual:`, 330, 960);

  doc.roundedRect(80, 990, 200, 30, 5).fill('#fcfcfc').stroke(); // For Wall Mount Single
  doc.roundedRect(340, 990, 200, 30, 5).fill('#fcfcfc').stroke(); // For Wall Mount Dual

  // Additional details for Wall Mount Single and Wall Mount Dual
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${wallMountSingle}`, 90, 1000);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${wallMountDual}`, 350, 1000);


  // floor mount single and dual
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Floor Mount Single:`, 70, 1060);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Floor Mount Dual:`, 330, 1060);

  doc.roundedRect(80, 1090, 200, 30, 5).fill('#fcfcfc').stroke(); // For Floor Mount Single
  doc.roundedRect(340, 1090, 200, 30, 5).fill('#fcfcfc').stroke(); // For Floor Mount Dual

  // Additional details for Floor Mount Single and Floor Mount Dual
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${floorMountSingle}`, 90, 1100);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${floorMountDual}`, 350, 1100);





  // Site Electrical Set Up

  // Title
  // Calculate the x-coordinate for center alignment
  const centerTX = doc.page.width / 2;
  // Title
  doc.moveDown(4);
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Site Electrical Set Up', 200);

  // add phase type and mains fuse size
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Phase Type:`, 70, 1220);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Mains Fuse Size:`, 330, 1220);

  doc.roundedRect(80, 1250, 200, 30, 5).fill('#fcfcfc').stroke(); // For Phase Type
  doc.roundedRect(340, 1250, 200, 30, 5).fill('#fcfcfc').stroke(); // For Mains Fuse Size

  // Additional details for Phase Type and Mains Fuse Size
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${phaseType}`, 90, 1260);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${mainsFuseSize}`, 350, 1260);
 

  // add mains isolation and earthing setup
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Mains Isolation:`, 70, 1320);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Earthing Setup:`, 330, 1320);

  doc.roundedRect(80, 1350, 200, 30, 5).fill('#fcfcfc').stroke(); // For Mains Isolation
  doc.roundedRect(340, 1350, 200, 30, 5).fill('#fcfcfc').stroke(); // For Earthing Setup

  // Additional details for Mains Isolation and Earthing Setup
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${mainsIsolation}`, 90, 1360);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${earthingSetup}`, 350, 1360);

  // add mobile signal and signal strength
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Mobile Signal:`, 70, 1420);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Signal Strength:`, 330, 1420);

  doc.roundedRect(80, 1450, 200, 30, 5).fill('#fcfcfc').stroke(); // For Mobile Signal
  doc.roundedRect(340, 1450, 200, 30, 5).fill('#fcfcfc').stroke(); // For Signal Strength

  // Additional details for Mobile Signal and Signal Strength
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${mobileSignal}`, 90, 1460);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${signalStrength}`, 350, 1460);


  // consumer unit make and total spare ways
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Consumer Unit Make:`, 70, 1520);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Total Spare Ways:`, 330, 1520);

  doc.roundedRect(80, 1550, 200, 30, 5).fill('#fcfcfc').stroke(); // For Consumer Unit Make
  doc.roundedRect(340, 1550, 200, 30, 5).fill('#fcfcfc').stroke(); // For Total Spare Ways

  // Additional details for Consumer Unit Make and Total Spare Ways
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${consumerUnitMake}`, 90, 1560);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${totalSpareWays}`, 350, 1560);


  // total amps in use
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Total Amps in Use:`, 70, 1620);

  doc.roundedRect(80, 1650, 470, 30, 5).fill('#fcfcfc').stroke(); // For Total Amps in Use

  // Additional details for Total Amps in Use
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${totalAmpsInUse}`, 90, 1660);





  // Installation Set Up

  doc.moveDown(4);

  // Title
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Installation Set Up', 230);

  // cable size Reqd. and cable Lenght Total
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Cable Size Reqd.:`, 70, 1780);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Cable Length Total:`, 330, 1780);

  doc.roundedRect(80, 1810, 200, 30, 5).fill('#fcfcfc').stroke(); // For Cable Size Reqd.
  doc.roundedRect(340, 1810, 200, 30, 5).fill('#fcfcfc').stroke(); // For Cable Length Total

  // Additional details for Cable Size Reqd. and Cable Length Total
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${cableSizeRead}`, 90, 1820);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${cableLengthTotal}`, 350, 1820);

  // total cable runs and Internal Cable Attachements

  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Total Cable Runs:`, 70, 1880);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Internal Cable Attachements:`, 330, 1880);

  doc.roundedRect(80, 1910, 200, 30, 5).fill('#fcfcfc').stroke(); // For Total Cable Runs
  doc.roundedRect(340, 1910, 200, 30, 5).fill('#fcfcfc').stroke(); // For Internal Cable Attachements

  // Additional details for Total Cable Runs and Internal Cable Attachements
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${totalCableRuns}`, 90, 1920);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${internalCableAttachment}`, 350, 1920);


  // Earthing Set Up and Data Cable Run
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Earthing Set Up:`, 70, 1980);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Data Cable Run:`, 330, 1980);

  doc.roundedRect(80, 2010, 200, 30, 5).fill('#fcfcfc').stroke(); // For Earthing Set Up
  doc.roundedRect(340, 2010, 200, 30, 5).fill('#fcfcfc').stroke(); // For Data Cable Run

  // Additional details for Earthing Set Up and Data Cable Run
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${earthingSetup}`, 90, 2020);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${dataCableRun}`, 350, 2020);

  // Cable Run Description
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Cable Run Description:`, 70, 2080);

  doc.roundedRect(80, 2110, 470, 100, 5).fill('#fcfcfc').stroke(); // For Cable Run Description

  // Additional details for Cable Run Description
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${cableRunDescription}`, 90, 2120);
  

  // Ground Works

  doc.moveDown(10);

  // Title
  doc.fontSize(20).font('Helvetica-Bold').fillColor('black').text('Ground Works', 230);

  
  // Select Options and GW Length
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Select Options:`, 70, 2315);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`GW Length:`, 330, 2315);

  doc.roundedRect(80, 2345, 200, 30, 5).fill('#fcfcfc').stroke(); // For Select Options
  doc.roundedRect(340, 2345, 200, 30, 5).fill('#fcfcfc').stroke(); // For GW Length

  // Additional details for Select Options and GW Length
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${selectOptions}`, 90, 2355);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${gwLength}`, 350, 2355);


  // GW Width and GW Depth
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`GW Width:`, 70, 2415);
  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`GW Depth:`, 330, 2415);

  doc.roundedRect(80, 2445, 200, 30, 5).fill('#fcfcfc').stroke(); // For GW Width
  doc.roundedRect(340, 2445, 200, 30, 5).fill('#fcfcfc').stroke(); // For GW Depth

  // Additional details for GW Width and GW Depth
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${gwWidth}`, 90, 2455);
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${gwDepth}`, 350, 2455);


  // Ground Works Description

  doc.fontSize(13).fillColor('black').font('Helvetica-Bold').text(`Ground Works Description:`, 70, 2515);

  doc.roundedRect(80, 2545, 470, 100, 5).fill('#fcfcfc').stroke(); // For Ground Works Description

  // Additional details for Ground Works Description
  doc.fillColor('#B0ADAD').fontSize(12).font('Helvetica').text(`${groundWorksDescription}`, 90, 2555);

  

  // Images

  // Title

  doc.moveDown(10);
  doc.fontSize(13).font('Helvetica-Bold').fillColor('black').text('Image attachments', 70);
  

  // Image 1
  doc.image(`${url}`, 70, 2750, { width: 230 ,height: 170});
  doc.image(`${url}`, 320, 2750, { width: 230 ,height: 170});

  // Image 2
  doc.image(`${url}`, 70, 2950, { width: 230 ,height: 170});
  doc.image(`${url}`, 320, 2950, { width: 230 ,height: 170});

  
  // Finalize the document
  doc.end();

  // Log a message once the PDF is generated
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
    url: "car.jpg"
  }
);

