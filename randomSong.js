<script>
    function handleClick() {
        fetch('http://localhost:8080/randomSong')
            .then(response => response.json())
            .then(data => {
                console.log('name', data.name);
                console.log('lyrics', data.lyrics);
            })
            .catch(error => {
                // Handle any errors that occur during the API call
                console.error(error);
            })}
</script>
