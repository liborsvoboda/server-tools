(() => {
    const btnConnect = document.getElementById("btn-connect");
    btnConnect.addEventListener("click", async () => {
        let devices = await navigator.hid.requestDevice({
            filters: [],
        });
        // let port =  await navigator.serial
        // .requestPort({ filters: [] });

        devices[0].open() 
        .then(() => {
            console.log(`Opened device: ${devices[0].productName}, vendorId: ${devices[0].vendorId}, productId: ${devices[0].productId}`);
            devices[0].addEventListener("inputreport", (event) => {
                alert("inputreport");
                const { data, device, reportId } = event;
              
                // // Handle only the Joy-Con Right device and a specific report ID.
                // //if (device.productId !== 0x2007 && reportId !== 0x3f) return;
              
                // const value = data.getUint8(0);
                // if (value === 0) return;
              
                // const someButtons = { 1: "A", 2: "X", 4: "B", 8: "Y" };
                // console.log(`User pressed button ${someButtons[value]}.`);
            });
        });
    })
})()