//const devices = [];

//devices.push({ user: "Mary", name: "Mary's iPhone" });
//devices.push({ user: "Alex", name: "Alex's Surface Pro" });
//devices.push({ user: "Mary", name: "Mary's MacBook" });

const devices = JSON.parse(localStorage.getItem('devices')) || [];

devices.forEach(function(device) {
    $('#devices tbody').append(`
      <tr>
        <td>${device.user}</td>
        <td>${device.name}</td>
      </tr>`
    );
});
//Using ES6;s object property shorthand
$('#add-device').on('click', function() {
    const user = $('#user').val();
    const name = $('#name').val();
    devices.push({ user, name });
    localStorage.setItem('devices', JSON.stringify(devices));
    location.href = 'device-list.html'; 
});
  