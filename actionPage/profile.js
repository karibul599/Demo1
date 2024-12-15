const table = document.getElementById('editableTable');

const tableBody = document.querySelector('#editableTable tbody'); // টেবিলের বডি ধরুন
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
]; // মাসের নাম

// 12টি মাসের জন্য লুপ চালান
for (let i = 0; i < months.length; i++) {
    const row = document.createElement('tr'); // নতুন একটি row তৈরি
    for (let j = 0; j < 4; j++) {
        const cell = document.createElement('td'); // প্রতিটি cell তৈরি
        if (j === 0) {
            cell.textContent = months[i]; // প্রথম কলামে মাসের নাম যোগ
        } else {
            cell.setAttribute('contenteditable', 'true'); // অন্যান্য কলাম editable
        }
        row.appendChild(cell); // cell-কে row-এর সাথে যোগ করুন
    }
    tableBody.appendChild(row); // পুরো row-কে table body-তে যোগ করুন
}
        function addRow() {
            const table = document.getElementById('editableTable').getElementsByTagName('tbody')[0];
            const newRow = table.insertRow();
            newRow.innerHTML = `
                <td contenteditable="true">New Name</td>
                <td contenteditable="true">Age</td>
                <td contenteditable="true">City</td>
                <td>
                    <button class="edit-btn" onclick="editRow(this)">Edit</button>
                    <button class="delete-btn" onclick="deleteRow(this)">Delete</button>
                </td>
            `;
        }
    
        function editRow(button) {
            const row = button.parentElement.parentElement;
            row.contentEditable = row.contentEditable === "true" ? "false" : "true";
        }
    
        function deleteRow(button) {
            const row = button.parentElement.parentElement;
            row.remove();
        }