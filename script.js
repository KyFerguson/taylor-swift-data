 <script>
        function generateCard() {
            var input: HTMLInputElement = document.getElementById("inputField").value;
            var cardContainer = document.getElementById("cardContainer");

            // Create card elements
            var card = document.createElement("div");
            card.className = "card";

            var image = document.createElement("img");
            image.src = "path/to/image.jpg";
            image.alt = "Card Image";

            var title = document.createElement("h2");
            title.textContent = "Card Title";

            var description = document.createElement("p");
            description.textContent = "Card Description";

            var link = document.createElement("a");
            link.href = "https://example.com";
            link.textContent = "Card Link";

            // Append elements to card
            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(link);

            // Append card to container
            cardContainer.appendChild(card);
        }
    </script>