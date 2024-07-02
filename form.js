const form = document.getElementById('postForm');

        form.addEventListener('submit', async function(event) {
            event.preventDefault();

            const formData = new FormData(form);
            const postData = {
                title: formData.get('title'),
                body: formData.get('body'),
                userId: formData.get('userId')
            };

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify(postData),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                });

                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error('Error:', error);
            }
        });