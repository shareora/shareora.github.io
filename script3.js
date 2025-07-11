// Background demo elements
        const demoBg = document.getElementById('demo-bg');
        const sizeControl = document.getElementById('size');
        const positionControl = document.getElementById('position');
        const opacityControl = document.getElementById('opacity');
        const attachmentControl = document.getElementById('attachment');
        
        // Value displays
        const sizeValue = document.getElementById('size-value');
        const positionValue = document.getElementById('position-value');
        const opacityValue = document.getElementById('opacity-value');
        
        // Initial background setup
        updateBackground();
        
        // Event listeners
        sizeControl.addEventListener('change', updateBackground);
        positionControl.addEventListener('change', updateBackground);
        opacityControl.addEventListener('input', updateBackground);
        attachmentControl.addEventListener('change', updateBackground);
        
        function updateBackground() {
            // Get current values
            const size = sizeControl.value;
            const position = positionControl.value;
            const opacity = opacityControl.value;
            const attachment = attachmentControl.value;
            
            // Update value displays
            sizeValue.textContent = size;
            positionValue.textContent = position;
            opacityValue.textContent = opacity;
            
            // Create background image with gradient overlay
            const bgImage = linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url('https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1200');
            
            // Apply styles to demo area
            demoBg.style.backgroundImage = bgImage;
            demoBg.style.backgroundSize = size;
            demoBg.style.backgroundPosition = position;
            demoBg.style.backgroundAttachment = attachment;
            demoBg.style.backgroundRepeat = 'no-repeat';
        }
        
        // Add animation to demo area on load
        window.addEventListener('load', function() {
            demoBg.style.transition = 'all 0.5s ease';
        });
