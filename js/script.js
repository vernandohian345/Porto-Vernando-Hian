// Hide loader when page loads
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
            }, 500);
        });

        // Enhanced Theme Toggle with smooth transition
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        const themeIcon = themeToggle.querySelector('i');

        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeIcon.classList.replace('fa-moon', 'fa-sun');
        }

        themeToggle.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                body.removeAttribute('data-theme');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
                localStorage.setItem('theme', 'light');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
                localStorage.setItem('theme', 'dark');
            }
        });

        // Enhanced Smooth Scrolling with offset
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offset = 80; // Adjust for fixed navbar
                    const targetPosition = target.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Enhanced Particles Animation
        const particlesContainer = document.getElementById('particles');
        const particleCount = 60;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (20 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }

        // About Section Animation on Scroll
        const aboutSection = document.getElementById('about');
        const profileCard = document.querySelector('.profile-card');
        const contentWrapper = document.querySelector('.content-wrapper');
        const detailItems = document.querySelectorAll('.detail-item');
        const skillItems = document.querySelectorAll('.skill-item');
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const checkAbout = () => {
            const sectionTop = aboutSection.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.8) {
                // Animate section title
                document.querySelector('.section-title').classList.add('show');
                
                // Animate profile card
                setTimeout(() => {
                    profileCard.classList.add('show');
                }, 200);
                
                // Animate content wrapper
                setTimeout(() => {
                    contentWrapper.classList.add('show');
                }, 400);
                
                // Animate detail items
                detailItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, 600 + (index * 100));
                });
                
                // Animate skill items and progress bars
                setTimeout(() => {
                    document.querySelector('.skills-showcase').classList.add('show');
                    
                    skillItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('show');
                            
                            // Animate progress bar
                            const progressBar = item.querySelector('.progress-bar');
                            if (progressBar) {
                                const width = progressBar.getAttribute('data-width');
                                progressBar.style.width = width + '%';
                            }
                        }, 100 * (index + 1));
                    });
                }, 1000);
            }
        };

        window.addEventListener('scroll', checkAbout);
        checkAbout(); // Check on initial load

        // Experience Section Animation on Scroll
        const experienceItems = document.querySelectorAll('.experience-item');
        
        const checkExperience = () => {
            experienceItems.forEach((item, index) => {
                const itemTop = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (itemTop < windowHeight * 0.8) {
                    setTimeout(() => {
                        item.classList.add('show');
                    }, index * 200);
                }
            });
        };

        window.addEventListener('scroll', checkExperience);
        checkExperience(); // Check on initial load

        // Enhanced Navbar on Scroll
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Enhanced Scroll to Top Button
        const scrollTopBtn = document.getElementById('scroll-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Enhanced Contact Form
        const contactForm = document.getElementById('contact-form');
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create success message
            const successMessage = document.createElement('div');
            successMessage.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                padding: 20px 30px;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(16, 185, 129, 0.3);
                z-index: 10000;
                animation: slideInRight 0.5s ease-out;
            `;
            successMessage.innerHTML = `
                <h4 style="margin: 0 0 10px 0;">✅ Message Sent!</h4>
                <p style="margin: 0;">Thank you ${name}! I'll get back to you soon.</p>
            `;
            
            document.body.appendChild(successMessage);
            
            // Remove message after 3 seconds
            setTimeout(() => {
                successMessage.style.animation = 'slideOutRight 0.5s ease-out';
                setTimeout(() => {
                    document.body.removeChild(successMessage);
                }, 500);
            }, 3000);
            
            // Reset form
            contactForm.reset();
        });

        // Enhanced Projects Modal
        const seeMoreBtn = document.getElementById('see-more-btn');
        const projectsModal = document.getElementById('projects-modal');
        const modalClose = document.getElementById('modal-close');
        
        seeMoreBtn.addEventListener('click', () => {
            projectsModal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
        
        modalClose.addEventListener('click', () => {
            projectsModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        });
        
        projectsModal.addEventListener('click', (e) => {
            if (e.target === projectsModal) {
                projectsModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        });

        // Add animation keyframes dynamically
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(`
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `, styleSheet.cssRules.length);
        
        styleSheet.insertRule(`
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `, styleSheet.cssRules.length);