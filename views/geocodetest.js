

<script>
    var myPoints = <%- JSON.stringify(location) %>;
    console.log("what is this",location)
    drawMap(myPoints)
</script>
