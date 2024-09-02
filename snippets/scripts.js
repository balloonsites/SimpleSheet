$(document).ready(function() {
    // Update active toggle for nav buttons and handle tab clicks
    $('.nav-toggle-btn').click(function() {
        $('.nav-toggle-btn').removeClass('active-toggle');
        $(this).addClass('active-toggle');

        // Hide all content sections
        $('.entry-list').removeClass('active-list');

        // Show the content section related to the clicked tab
        const tabText = $(this).find('span').text().trim();
        if (tabText === 'Items') {
            $('#entry-list').addClass('active-list');
        } else if (tabText === 'Groups') {
            $('#group-list').addClass('active-list');
        }
    });

    // Single click icon toggle for light/dark mode
    $('#mode-toggle').click(function() {
        const body = $('body');
        const isDarkMode = body.hasClass('dark-mode');

        // Toggle dark mode class
        body.toggleClass('dark-mode');

        // Toggle icon between light_mode and dark_mode
        $(this).text(isDarkMode ? 'light_mode' : 'dark_mode');
    });

    // Show back arrow if not on entry list page and handle back arrow click
    if (window.location.pathname !== "/entry-list.html") {
        $('#arrow-back').show();
    }

    $('#arrow-back').click(function() {
        window.history.back();
    });

    // Handle click on the trigger area to show/hide dropdown menu
    $('.el-col2-select-trigger').click(function() {
        $(this).siblings('.el-col2-select-options-wrap').toggle();
    });

    // Hide the dropdown menu when clicking outside of it
    $(document).click(function(event) {
        if (!$(event.target).closest('.el-col2-select').length) {
            $('.el-col2-select-options-wrap').hide();
        }
    });

    // Handle click on dropdown options
    $('.el-col2-select-options-item').click(function() {
        var selectedText = $(this).text();
        $(this).closest('.el-col2-select').find('.el-txt').first().text(selectedText);
        $('.el-col2-select-options-wrap').hide();
    });

    // Handle modal interactions
    var modal = $('#myModal');
    var btn = $('#entries');
    var span = $('.close');
    var cancelBtn = $('#cancelBtn');

    // When the user clicks the button, open the modal
    btn.on('click', function() {
        modal.show();
    });

    // When the user clicks on <span> (x) or cancel button, close the modal
    span.on('click', function() {
        modal.hide();
    });
    cancelBtn.on('click', function() {
        modal.hide();
    });

    // When the user clicks anywhere outside of the modal, close it
    $(window).on('click', function(event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });

    // Handle form submission inside the modal
    $('#modalForm').on('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var addEntryName = $('#add-entry_name').val();
        var addEntryAmount = $('#add-entry_amount').val();

        // Handle the form data here, e.g., send it to a server
        console.log('Name:', addEntryName);
        console.log('Amount:', addEntryAmount);

        // Close the modal after form submission
        modal.hide();
    });

    //
    //
    // Single View Functions
    //
    //
    
    // Increment and decrement Custom Amount input
    $('#es-minus-btn').on('click', function() {
        var inputField = $('#es-cus_amt');
        var currentValue = parseInt(inputField.val());
        if (currentValue > 0) { // Avoid negative numbers if not needed
            inputField.val(currentValue - 1);
        }
    });

    $('#es-add-btn').on('click', function() {
        var inputField = $('#es-cus_amt');
        var currentValue = parseInt(inputField.val());
        inputField.val(currentValue + 1);
    });
});
