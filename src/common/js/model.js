function highestBid()
{
    $.get("/highestBid", function(data){
            $("#highest_bid").html("最高价: " + data);
    });
    
}

function getBid()
{
    var address = document.getElementById("address").value;
    $.get("/getBid?address=" + address, function(data){
            $("#address_bid").html("用户出价: " + data);
    });
}

function bid()
{
    var bid_user = document.getElementById("bid_user").value;
    var bid_value = document.getElementById("bid_value").value;

    $.get("/bid?bid_user=" + bid_user + "&bid_value=" + bid_value, function(data){
            $("#tx_hash").html("交易: " + JSON.stringify(data));
    });
}

export {

            highestBid,getBid,bid

}