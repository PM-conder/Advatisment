 const modal = document.getElementById('orderModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const closeModal = document.querySelector('.close-modal');
        const viewButtons = document.querySelectorAll('.view-btn');
        const productImages = document.querySelectorAll('.product-image');
        
        // Function to open modal with product details
        function openModal(imageSrc, productName) {
            modalImage.src = imageSrc;
            modalTitle.textContent = productName;
            modal.style.display = 'flex';
        }
        
        // Add event listeners to view buttons
        viewButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productCard = this.closest('.product-card');
                const productImage = productCard.querySelector('.product-image');
                const productTitle = productCard.querySelector('.product-title').textContent;
                
                openModal(productImage.src, productTitle);
            });
        });
        
        // Add event listeners to product images
        productImages.forEach(image => {
            image.addEventListener('click', function() {
                const productTitle = this.getAttribute('data-name');
                openModal(this.src, productTitle);
            });
        });
        
        // Close modal when clicking X
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Order buttons functionality
        document.getElementById('phoneOrder').addEventListener('click', function() {
            window.location.href = 'tel:+255792148013';
        });
        
        document.getElementById('whatsappOrder').addEventListener('click', function() {
            // Get the product name from the modal
            const productName = document.getElementById('modalTitle').textContent;
            // Create a proper WhatsApp message
            const message = `Habari! Nina hamu ya kuagiza ${productName} kutoka kwenye tovuti yenu.`;
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            // Create the WhatsApp URL
            const whatsappUrl = `https://wa.me/255792148013?text=${encodedMessage}`;
            // Open WhatsApp
            window.open(whatsappUrl, '_blank');
        });
        
        document.getElementById('smsOrder').addEventListener('click', function() {
            // Get the product name from the modal
            const productName = document.getElementById('modalTitle').textContent;
            // Create SMS message
            const message = `Nina hamu ya kuagiza ${productName} kutoka kwenye tovuti yenu.`;
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            // Create SMS URL
            const smsUrl = `sms:+255792148013?body=${encodedMessage}`;
            // Open SMS
            window.location.href = smsUrl;
        });
        
        // Form submission
        document.getElementById('feedbackForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const description = document.getElementById('description').value;
            
            if (description.trim() === '') {
                alert('Tafadhali andika maoni yako kabla ya kutuma');
                return;
            }
            
            // In a real application, you would send this data to a server
            alert('Asante kwa maoni yako! Tutayachukulia kwa uzito.');
            document.getElementById('description').value = '';
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate position to scroll to (accounting for header height)
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });