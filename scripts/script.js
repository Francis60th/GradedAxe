
// Function to redirect based on the dropdown selection
function redirectToUrl(select) {
    var selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

// Automatically select the option that matches the current URL
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('dropdown');
    var currentUrl = window.location.href;
    for (var i = 0; i < dropdown.options.length; i++) {
        if (dropdown.options[i].value === currentUrl) {
            dropdown.selectedIndex = i;
            break;
        }
    }
});
