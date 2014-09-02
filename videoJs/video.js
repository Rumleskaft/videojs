var player; 

		$( document ).ready(function() {
			player = videojs('vid');
			player.controlBar.hide();
	});
	
		function changeVid(address){
			$("video").attr("src", address);
		};

	