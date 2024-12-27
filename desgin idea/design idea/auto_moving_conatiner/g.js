const container = document.getElementById('container');
        let currentItem = 1;
        
        function createItem() {
            const item = document.createElement('div');
            item.className = 'item';
            item.textContent = `Item ${currentItem}`;
            container.appendChild(item);

            // Start animation immediately
            requestAnimationFrame(() => {
                item.classList.add('moving');
            });

            // Create next item after a shorter delay
            setTimeout(() => {
                currentItem = currentItem >= 5 ? 1 : currentItem + 1;
                createItem();
            }, 600); // Reduced to 600ms delay between items

            // Remove item after animation completes
            item.addEventListener('animationend', () => {
                item.remove();
            });
        }

        // Start the sequence
        createItem();