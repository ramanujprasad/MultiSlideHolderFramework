$(function() {
	$(".connectedSortable").draggable({
		revert : "invalid",
		cursor : "move",
		helper : "clone"
	});
	$(".connectedSortable").droppable({
		drop : function(event, ui) {
			var $dragElem = $(ui.draggable).clone().replaceAll(this);
			$(this).replaceAll(ui.draggable);
			makeElementAsDragAndDrop(this);
			makeElementAsDragAndDrop($dragElem);
		}
	});

	for (var i = 1; i < 12; i++) {
		lightboxOverLay("vlightbox" + i);
	}
});

$(function() {
	setDynamicHeight();
});
$(window).resize(function() {
	setDynamicHeight();
});

function setDynamicHeight() {
	var heightpx = $('#middle-section').height() - $('#custom-header').height()
			- $('#custom-footer').height() - $('#middle-section2').height();
	var middlepx = (heightpx - 50) / 2;
	$("#middle-section2").css("padding-top", middlepx);
}

$('.carousel').carousel({
	interval : 0
});

function makeElementAsDragAndDrop(elem) {
	$(elem).draggable({
		revert : "invalid",
		cursor : "move",
		helper : "clone"
	});
	$(elem).droppable({
		drop : function(event, ui) {
			var $dragElem = $(ui.draggable).clone().replaceAll(this);
			$(this).replaceAll(ui.draggable);
			makeElementAsDragAndDrop(this);
			makeElementAsDragAndDrop($dragElem);
		}
	});

	lightboxOverLay($(elem).attr("id"));
}

function lightbox(id) {
	var a = jQuery;
	a("#" + id + " ." + id).mouseenter(
			function() {
				var b = a("div.vlb_zoom", this);
				if (!b.length) {
					b = a(">a", this).get(0) || this;
					b = a('<div class="vlb_zoom" style="position:absolute">')
							.html(a(b).html()).hide().appendTo(this);
					a("img:first", b).detach();
					b.html(b.html().trim())
				}
				if (b.html()) {
					b.slideDown("fast")
				}
			}).mouseleave(function() {
		if (a("div", this).html()) {
			a("div", this).slideUp("fast")
		}
	})

}

function lightboxOverLay(id) {

	window.Lightbox = new jQuery().visualLightbox({
		autoPlay : true,
		borderSize : 39,
		classNames : id,
		descSliding : true,
		enableRightClick : false,
		enableSlideshow : true,
		resizeSpeed : 7,
		slideTime : 4,
		startZoom : true,
		overlayOpacity : 0.9
	});
	lightbox(id);

}
/** Get the tile count from database and pass to a function to create html code * */
var db = openDatabase('TILE_DB', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function(tx) {
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 1 + "\'", [], function(tx, results) {
		imgCountInTiles1(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile1Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		
		lightboxOverLay("vlightbox1");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 2 + "\'", [], function(tx, results) {
		imgCountInTiles2(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile2Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox2");
	});

	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 3 + "\'", [], function(tx, results) {
		imgCountInTiles3(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile3Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox3");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 4 + "\'", [], function(tx, results) {
		imgCountInTiles4(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile4Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox4");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 5 + "\'", [], function(tx, results) {
		imgCountInTiles5(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile5Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox5");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 6 + "\'", [], function(tx, results) {
		imgCountInTiles6(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile6Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox6");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 7 + "\'", [], function(tx, results) {
		imgCountInTiles7(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile7Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox7");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 8 + "\'", [], function(tx, results) {
		imgCountInTiles8(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile8Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox8");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 9 + "\'", [], function(tx, results) {
		imgCountInTiles9(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile9Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox9");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 10 + "\'", [], function(tx, results) {
		imgCountInTiles10(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile10Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox10");
	});
	tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'"
			+ 11 + "\'", [], function(tx, results) {
		imgCountInTiles11(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		$('#tile11Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
		lightboxOverLay("vlightbox11");
	});
});
/** Get the title from database * */
$(document)
		.ready(
				function() {
					var db = openDatabase('TILE_DB', '1.0', 'Test DB',
							2 * 1024 * 1024);
					db.transaction(function(tx) {
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 1 + "\'", [], function(tx, results) {
									$('#tile-1-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 2 + "\'", [], function(tx, results) {
									$('#tile-2-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 3 + "\'", [], function(tx, results) {
									$('#tile-3-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 4 + "\'", [], function(tx, results) {
									$('#tile-4-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 5 + "\'", [], function(tx, results) {
									$('#tile-5-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 6 + "\'", [], function(tx, results) {
									$('#tile-6-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 7 + "\'", [], function(tx, results) {
									$('#tile-7-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 8 + "\'", [], function(tx, results) {
									$('#tile-8-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 9 + "\'", [], function(tx, results) {
									$('#tile-9-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 10 + "\'", [], function(tx, results) {
									$('#tile-10-title').text(
											results.rows.item(0).TILE_TITLE);
								});
						tx.executeSql(
								"SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'"
										+ 11 + "\'", [], function(tx, results) {
									$('#tile-11-title').text(
											results.rows.item(0).TILE_TITLE);
								});
					});
				});

function imgCountInTiles1(count1) {

	/* Slide Images generation for Tile 1 */

	for (var i = 1; i <= count1; i++) {
		$("#item1").append('<div class="item" id="div1"></div>');
		if (i === 1) {
			$("#div1").addClass("item active");
		}
		$("#div1").attr("id", "tile1_slide_div" + i);
		$('#' + "tile1_slide_div" + i).append('<a class="vlightbox1" id="a1">');
		$("#a1").attr("id", "tile1_slide_a" + i);
		var img_url1 = 'img/images/1/1.' + i + '.PNG';
		$('#' + "tile1_slide_a" + i).attr('href', img_url1);
		$('#' + "tile1_slide_a" + i).append(
				'<img class="slideImage" id="img1">');
		$("#img1").attr("id", "tile1_slide_img" + i);
		$('#' + "tile1_slide_img" + i).attr('src', img_url1);

	}
	if (count1 == 0) {
		$("#item1").append('<div class="item" id="div1"></div>');
		$("#div1").addClass("item active");
		$("#div1").attr("id", "tile1_slide_div");
		$('#' + "tile1_slide_div").append('<a class="vlightbox1" id="a1">');
		$("#a1").attr("id", "tile1_slide_a");
		var img_url1 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile1_slide_a").attr('href', img_url1);
		$('#' + "tile1_slide_a").append('<img class="slideImage" id="img1">');
		$("#img1").attr("id", "tile1_slide_img");
		$('#' + "tile1_slide_img").attr('src', img_url1);
	}
	/*
	 * if ($(window).width() < 768) { if(count1 == 0){ resetTilesForMobile(); } }
	 * $(window).resize(function(){ if ($(window).width() < 768 && count1 == 0) {
	 * resetTilesForMobile(); } }); function resetTilesForMobile() {
	 * $('.tilegrid1').remove(); $(".tilegrid2").css("top", "10px !important");
	 * $('body').append("<style type='text/css'>@media (max-width: 1001px) {
	 * .tilegrid2 {top: 10px!important;} }</style>"); }
	 */
	/*
	 * if(count1 == 0){ $('.tilegrid1').remove(); $(".tilegrid2").css("top",
	 * "10px !important"); $('body').append("<style type='text/css'>@media
	 * (max-width: 1001px) { .tilegrid2 {top: 10px!important;} }</style>"); }
	 */
}

function imgCountInTiles2(count2) {

	/* Slide Images generation for Tile 2 */

	for (var i = 1; i <= count2; i++) {
		$("#item2").append('<div class="item" id="div2"></div>');
		if (i === 1) {
			$("#div2").addClass("item active");
		}
		$("#div2").attr("id", "tile2_slide_div" + i);
		$('#' + "tile2_slide_div" + i).append('<a class="vlightbox2" id="a2">');
		$("#a2").attr("id", "tile2_slide_a" + i);
		var img_url2 = 'img/images/2/2.' + i + '.PNG';
		$('#' + "tile2_slide_a" + i).attr('href', img_url2);
		$('#' + "tile2_slide_a" + i).append(
				'<img class="slideImage" id="img2">');
		$("#img2").attr("id", "tile2_slide_img" + i);
		$('#' + "tile2_slide_img" + i).attr('src', img_url2);

	}

	if (count2 == 0) {
		$("#item2").append('<div class="item" id="div2"></div>');
		$("#div2").addClass("item active");
		$("#div2").attr("id", "tile2_slide_div");
		$('#' + "tile2_slide_div").append('<a class="vlightbox2" id="a2">');
		$("#a2").attr("id", "tile2_slide_a");
		var img_url2 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile2_slide_a").attr('href', img_url2);
		$('#' + "tile2_slide_a").append('<img class="slideImage" id="img2">');
		$("#img2").attr("id", "tile2_slide_img");
		$('#' + "tile2_slide_img").attr('src', img_url2);
	}
}

function imgCountInTiles3(count3) {

	/* Slide Images generation for Tile 3 */

	for (var i = 1; i <= count3; i++) {
		$("#item3").append('<div class="item" id="div3"></div>');
		if (i === 1) {
			$("#div3").addClass("item active");
		}
		$("#div3").attr("id", "tile3_slide_div" + i);
		$('#' + "tile3_slide_div" + i).append('<a class="vlightbox3" id="a3">');
		$("#a3").attr("id", "tile3_slide_a" + i);
		var img_url3 = 'img/images/3/3.' + i + '.PNG';
		$('#' + "tile3_slide_a" + i).attr('href', img_url3);
		$('#' + "tile3_slide_a" + i).append(
				'<img class="slideImage" id="img3">');
		$("#img3").attr("id", "tile3_slide_img" + i);
		$('#' + "tile3_slide_img" + i).attr('src', img_url3);

	}
	if (count3 == 0) {
		$("#item3").append('<div class="item" id="div3"></div>');
		$("#div3").addClass("item active");
		$("#div3").attr("id", "tile3_slide_div");
		$('#' + "tile3_slide_div").append('<a class="vlightbox3" id="a3">');
		$("#a3").attr("id", "tile3_slide_a");
		var img_url3 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile3_slide_a").attr('href', img_url3);
		$('#' + "tile3_slide_a").append('<img class="slideImage" id="img3">');
		$("#img3").attr("id", "tile3_slide_img");
		$('#' + "tile3_slide_img").attr('src', img_url3);
	}
}

function imgCountInTiles4(count4) {

	/* Slide Images generation for Tile 4 */

	for (var i = 1; i <= count4; i++) {
		$("#item4").append('<div class="item" id="div4"></div>');
		if (i === 1) {
			$("#div4").addClass("item active");
		}
		$("#div4").attr("id", "tile4_slide_div" + i);
		$('#' + "tile4_slide_div" + i).append('<a class="vlightbox4" id="a4">');
		$("#a4").attr("id", "tile4_slide_a" + i);
		var img_url4 = 'img/images/4/4.' + i + '.PNG';
		$('#' + "tile4_slide_a" + i).attr('href', img_url4);
		$('#' + "tile4_slide_a" + i).append(
				'<img class="slideImage" id="img4">');
		$("#img4").attr("id", "tile4_slide_img" + i);
		$('#' + "tile4_slide_img" + i).attr('src', img_url4);

	}
	if (count4 == 0) {
		$("#item4").append('<div class="item" id="div4"></div>');
		$("#div4").addClass("item active");
		$("#div4").attr("id", "tile4_slide_div");
		$('#' + "tile4_slide_div").append('<a class="vlightbox4" id="a4">');
		$("#a4").attr("id", "tile4_slide_a");
		var img_url4 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile4_slide_a").attr('href', img_url4);
		$('#' + "tile4_slide_a").append('<img class="slideImage" id="img4">');
		$("#img4").attr("id", "tile4_slide_img");
		$('#' + "tile4_slide_img").attr('src', img_url4);
	}
}

function imgCountInTiles5(count5) {

	/* Slide Images generation for Tile 5 */

	for (var i = 1; i <= count5; i++) {
		$("#item5").append('<div class="item" id="div5"></div>');
		if (i === 1) {
			$("#div5").addClass("item active");
		}
		$("#div5").attr("id", "tile5_slide_div" + i);
		$('#' + "tile5_slide_div" + i).append('<a class="vlightbox5" id="a5">');
		$("#a5").attr("id", "tile5_slide_a" + i);
		var img_url5 = 'img/images/5/5.' + i + '.PNG';
		$('#' + "tile5_slide_a" + i).attr('href', img_url5);
		$('#' + "tile5_slide_a" + i).append(
				'<img class="slideImage" id="img5">');
		$("#img5").attr("id", "tile5_slide_img" + i);
		$('#' + "tile5_slide_img" + i).attr('src', img_url5);

	}
	if (count5 == 0) {
		$("#item5").append('<div class="item" id="div5"></div>');
		$("#div5").addClass("item active");
		$("#div5").attr("id", "tile5_slide_div");
		$('#' + "tile5_slide_div").append('<a class="vlightbox5" id="a5">');
		$("#a5").attr("id", "tile5_slide_a");
		var img_url5 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile5_slide_a").attr('href', img_url5);
		$('#' + "tile5_slide_a").append('<img class="slideImage" id="img5">');
		$("#img5").attr("id", "tile5_slide_img");
		$('#' + "tile5_slide_img").attr('src', img_url5);
	}
}

function imgCountInTiles6(count6) {

	/* Slide Images generation for Tile 6 */

	for (var i = 1; i <= count6; i++) {
		$("#item6").append('<div class="item" id="div6"></div>');
		if (i === 1) {
			$("#div6").addClass("item active");
		}
		$("#div6").attr("id", "tile6_slide_div" + i);
		$('#' + "tile6_slide_div" + i).append('<a class="vlightbox6" id="a6">');
		$("#a6").attr("id", "tile6_slide_a" + i);
		var img_url6 = 'img/images/6/6.' + i + '.PNG';
		$('#' + "tile6_slide_a" + i).attr('href', img_url6);
		$('#' + "tile6_slide_a" + i).append(
				'<img class="slideImage" id="img6">');
		$("#img6").attr("id", "tile6_slide_img" + i);
		$('#' + "tile6_slide_img" + i).attr('src', img_url6);

	}
	if (count6 == 0) {
		$("#item6").append('<div class="item" id="div6"></div>');
		$("#div6").addClass("item active");
		$("#div6").attr("id", "tile6_slide_div");
		$('#' + "tile6_slide_div").append('<a class="vlightbox6" id="a6">');
		$("#a6").attr("id", "tile6_slide_a");
		var img_url6 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile6_slide_a").attr('href', img_url6);
		$('#' + "tile6_slide_a").append('<img class="slideImage" id="img6">');
		$("#img6").attr("id", "tile6_slide_img");
		$('#' + "tile6_slide_img").attr('src', img_url6);
	}
}

function imgCountInTiles7(count7) {

	/* Slide Images generation for Tile 7 */

	for (var i = 1; i <= count7; i++) {
		$("#item7").append('<div class="item" id="div7"></div>');
		if (i === 1) {
			$("#div7").addClass("item active");
		}
		$("#div7").attr("id", "tile7_slide_div" + i);
		$('#' + "tile7_slide_div" + i).append('<a class="vlightbox7" id="a7">');
		$("#a7").attr("id", "tile7_slide_a" + i);
		var img_url7 = 'img/images/7/7.' + i + '.PNG';
		$('#' + "tile7_slide_a" + i).attr('href', img_url7);
		$('#' + "tile7_slide_a" + i).append(
				'<img class="slideImage" id="img7">');
		$("#img7").attr("id", "tile7_slide_img" + i);
		$('#' + "tile7_slide_img" + i).attr('src', img_url7);

	}
	if (count7 == 0) {
		$("#item7").append('<div class="item" id="div7"></div>');
		$("#div7").addClass("item active");
		$("#div7").attr("id", "tile7_slide_div");
		$('#' + "tile7_slide_div").append('<a class="vlightbox7" id="a7">');
		$("#a7").attr("id", "tile7_slide_a");
		var img_url7 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile7_slide_a").attr('href', img_url7);
		$('#' + "tile7_slide_a").append('<img class="slideImage" id="img7">');
		$("#img7").attr("id", "tile7_slide_img");
		$('#' + "tile7_slide_img").attr('src', img_url7);
	}
}

function imgCountInTiles8(count8) {

	/* Slide Images generation for Tile 8 */

	for (var i = 1; i <= count8; i++) {
		$("#item8").append('<div class="item" id="div8"></div>');
		if (i === 1) {
			$("#div8").addClass("item active");
		}
		$("#div8").attr("id", "tile8_slide_div" + i);
		$('#' + "tile8_slide_div" + i).append('<a class="vlightbox8" id="a8">');
		$("#a8").attr("id", "tile8_slide_a" + i);
		var img_url8 = 'img/images/8/8.' + i + '.PNG';
		$('#' + "tile8_slide_a" + i).attr('href', img_url8);
		$('#' + "tile8_slide_a" + i).append(
				'<img class="slideImage" id="img8">');
		$("#img8").attr("id", "tile8_slide_img" + i);
		$('#' + "tile8_slide_img" + i).attr('src', img_url8);

	}
	if (count8 == 0) {
		$("#item8").append('<div class="item" id="div8"></div>');
		$("#div8").addClass("item active");
		$("#div8").attr("id", "tile8_slide_div");
		$('#' + "tile8_slide_div").append('<a class="vlightbox8" id="a8">');
		$("#a8").attr("id", "tile8_slide_a");
		var img_url8 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile8_slide_a").attr('href', img_url8);
		$('#' + "tile8_slide_a").append('<img class="slideImage" id="img8">');
		$("#img8").attr("id", "tile8_slide_img");
		$('#' + "tile8_slide_img").attr('src', img_url8);
	}
}

function imgCountInTiles9(count9) {

	/* Slide Images generation for Tile 9 */

	for (var i = 1; i <= count9; i++) {
		$("#item9").append('<div class="item" id="div9"></div>');
		if (i === 1) {
			$("#div9").addClass("item active");
		}
		$("#div9").attr("id", "tile9_slide_div" + i);
		$('#' + "tile9_slide_div" + i).append('<a class="vlightbox9" id="a9">');
		$("#a9").attr("id", "tile9_slide_a" + i);
		var img_url9 = 'img/images/9/9.' + i + '.PNG';
		$('#' + "tile9_slide_a" + i).attr('href', img_url9);
		$('#' + "tile9_slide_a" + i).append(
				'<img class="slideImage" id="img9">');
		$("#img9").attr("id", "tile9_slide_img" + i);
		$('#' + "tile9_slide_img" + i).attr('src', img_url9);

	}
	if (count9 == 0) {
		$("#item9").append('<div class="item" id="div9"></div>');
		$("#div9").addClass("item active");
		$("#div9").attr("id", "tile9_slide_div");
		$('#' + "tile9_slide_div").append('<a class="vlightbox9" id="a9">');
		$("#a9").attr("id", "tile9_slide_a");
		var img_url9 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile9_slide_a").attr('href', img_url9);
		$('#' + "tile9_slide_a").append('<img class="slideImage" id="img9">');
		$("#img9").attr("id", "tile9_slide_img");
		$('#' + "tile9_slide_img").attr('src', img_url9);
	}
}

function imgCountInTiles10(count10) {

	/* Slide Images generation for Tile 10 */
	for (var i = 1; i <= count10; i++) {
		$("#item10").append('<div class="item" id="div10"></div>');
		if (i === 1) {
			$("#div10").addClass("item active");
		}
		$("#div10").attr("id", "tile10_slide_div" + i);
		$('#' + "tile10_slide_div" + i).append(
				'<a class="vlightbox10" id="a10">');
		$("#a10").attr("id", "tile10_slide_a" + i);
		var img_url10 = 'img/images/10/10.' + i + '.PNG';
		$('#' + "tile10_slide_a" + i).attr('href', img_url10);
		$('#' + "tile10_slide_a" + i).append(
				'<img class="slideImage" id="img10">');
		$("#img10").attr("id", "tile10_slide_img" + i);
		$('#' + "tile10_slide_img" + i).attr('src', img_url10);

	}
	if (count10 == 0) {
		$("#item10").append('<div class="item" id="div10"></div>');
		$("#div10").addClass("item active");
		$("#div10").attr("id", "tile10_slide_div");
		$('#' + "tile10_slide_div").append('<a class="vlightbox10" id="a10">');
		$("#a10").attr("id", "tile10_slide_a");
		var img_url10 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile10_slide_a").attr('href', img_url10);
		$('#' + "tile10_slide_a").append('<img class="slideImage" id="img10">');
		$("#img10").attr("id", "tile10_slide_img");
		$('#' + "tile10_slide_img").attr('src', img_url10);
	}
}

function imgCountInTiles11(count11) {

	/* Slide Images generation for Tile 11 */
	for (var i = 1; i <= count11; i++) {
		$("#item11").append('<div class="item" id="div11"></div>');
		if (i === 1) {
			$("#div11").attr("class", "item active");
		}
		$("#div11").attr("id", "tile11_slide_div" + i);
		$('#' + "tile11_slide_div" + i).append(
				'<a class="vlightbox11" id="a11">');
		$("#a11").attr("id", "tile11_slide_a" + i);
		var img_url11 = 'img/images/11/11.' + i + '.PNG';
		$('#' + "tile11_slide_a" + i).attr('href', img_url11);
		$('#' + "tile11_slide_a" + i).append(
				'<img class="slideImage" id="img11">');
		$("#img11").attr("id", "tile11_slide_img" + i);
		$('#' + "tile11_slide_img" + i).attr('src', img_url11);
	}
	if (count11 == 0) {
		$("#item11").append('<div class="item" id="div11"></div>');
		$("#div11").addClass("item active");
		$("#div11").attr("id", "tile11_slide_div");
		$('#' + "tile11_slide_div").append('<a class="vlightbox11" id="a11">');
		$("#a11").attr("id", "tile11_slide_a");
		var img_url11 = 'img/icons/SlidesNotAvailable.png';
		$('#' + "tile11_slide_a").attr('href', img_url11);
		$('#' + "tile11_slide_a").append('<img class="slideImage" id="img11">');
		$("#img11").attr("id", "tile11_slide_img");
		$('#' + "tile11_slide_img").attr('src', img_url11);
	}
}