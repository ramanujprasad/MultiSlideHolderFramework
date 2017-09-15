$(document).ready(function() {
	var db = openDatabase('TILE_DB', '1.0', 'Test DB', 2 * 1024 * 1024);  
	
	db.transaction(function (tx) {
	tx.executeSql('DROP TABLE TILES_TABLE');
	
	tx.executeSql('CREATE TABLE IF NOT EXISTS TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE)');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 1")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 2")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 3")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 4")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 5")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 6")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 7")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 8")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 9")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 10")');
	tx.executeSql('INSERT INTO TILES_TABLE (IMAGE_COUNT_IN_TILE, TILE_TITLE) VALUES (3, "Group slide 11")');  
  });
});
function LoadDetails() {	
	var title1 = $('#formValueId1').val();
	var title2 = $('#formValueId2').val();
	var title3 = $('#formValueId3').val();
	var title4 = $('#formValueId4').val();
	var title5 = $('#formValueId5').val();
	var title6 = $('#formValueId6').val();
	var title7 = $('#formValueId7').val();
	var title8 = $('#formValueId8').val();
	var title9 = $('#formValueId9').val();
	var title10 = $('#formValueId10').val();
	var title11 = $('#formValueId11').val();
		
  var db = openDatabase('TILE_DB', '1.0', 'Test DB', 2 * 1024 * 1024);
	db.transaction(function (tx) {           
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title1+"\' WHERE rowid=\'" +1+"\'", []); 
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title2+"\' WHERE rowid=\'" +2+"\'", []);
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title3+"\' WHERE rowid=\'" +3+"\'", []);
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title4+"\' WHERE rowid=\'" +4+"\'", []); 
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title5+"\' WHERE rowid=\'" +5+"\'", []);
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title6+"\' WHERE rowid=\'" +6+"\'", []);
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title7+"\' WHERE rowid=\'" +7+"\'", []); 
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title8+"\' WHERE rowid=\'" +8+"\'", []);
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title9+"\' WHERE rowid=\'" +9+"\'", []);
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title10+"\' WHERE rowid=\'" +10+"\'", []);
		tx.executeSql("update TILES_TABLE SET TILE_TITLE=\'" +title11+"\' WHERE rowid=\'" +11+"\'", []);	
	});
	var val1 = document.getElementById("tile1Select").value;
	var val2 = document.getElementById("tile2Select").value;
	var val3 = document.getElementById("tile3Select").value;
	var val4 = document.getElementById("tile4Select").value;
	var val5 = document.getElementById("tile5Select").value;
	var val6 = document.getElementById("tile6Select").value;
	var val7 = document.getElementById("tile7Select").value;
	var val8 = document.getElementById("tile8Select").value;
	var val9 = document.getElementById("tile9Select").value;
	var val10 = document.getElementById("tile10Select").value;
	var val11 = document.getElementById("tile11Select").value;
	
	var db = openDatabase('TILE_DB', '1.0', 'Test DB', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val1+"\' WHERE rowid=\'" +1+"\'", []); 
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val2+"\' WHERE rowid=\'" +2+"\'", []);
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val3+"\' WHERE rowid=\'" +3+"\'", []);
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val4+"\' WHERE rowid=\'" +4+"\'", []); 
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val5+"\' WHERE rowid=\'" +5+"\'", []);
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val6+"\' WHERE rowid=\'" +6+"\'", []);
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val7+"\' WHERE rowid=\'" +7+"\'", []); 
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val8+"\' WHERE rowid=\'" +8+"\'", []);
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val9+"\' WHERE rowid=\'" +9+"\'", []);
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val10+"\' WHERE rowid=\'" +10+"\'", []);
		tx.executeSql("update TILES_TABLE SET IMAGE_COUNT_IN_TILE=\'" +val11+"\' WHERE rowid=\'" +11+"\'", []);	
	});
	document.getElementById('success-mesg').style.display = "block";
}
$(document).ready(function() {
	$(function() {
		setDynamicHeight();
	});
	$(window).resize(function() {
		setDynamicHeight();
	});

	function setDynamicHeight() {
		var height = $(window).height();
		if (height <= 533) {
			$('.sidebar-top-margin').css('margin-top', '-14px');
		} else if (height > 533 && height <= 606) {
			$('.sidebar-top-margin').css('margin-top', '-10px');
		} else if (height > 607 && height <= 614) {
			$('.sidebar-top-margin').css('margin-top', '-3px');
		} else if (height > 615 && height <= 667) {
			$('.sidebar-top-margin').css('margin-top', '17px');
		} else if (height > 668 && height <= 698) {
			$('.sidebar-top-margin').css('margin-top', '30px');
		} else if (height > 699 && height <= 768) {
			$('.sidebar-top-margin').css('margin-top', '64px');
		} else {
			$('.sidebar-top-margin').css('margin-top', '64px');
		}
	}
});

$(document).ready(function() {
	var db = openDatabase('TILE_DB', '1.0', 'Test DB', 2 * 1024 * 1024);
	db.transaction(function (tx) {
		tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +1+"\'", [], function (tx, results) {
			$('#formValueId1').val(results.rows.item(0).TILE_TITLE);	
		});
	    tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +2+"\'", [], function (tx, results) {
			$('#formValueId2').val(results.rows.item(0).TILE_TITLE);	
	    });
	    tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +3+"\'", [], function (tx, results) {
			$('#formValueId3').val(results.rows.item(0).TILE_TITLE);	
	    });
	    tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +4+"\'", [], function (tx, results) {
			$('#formValueId4').val(results.rows.item(0).TILE_TITLE);	
	    });
	    tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +5+"\'", [], function (tx, results) {
			$('#formValueId5').val(results.rows.item(0).TILE_TITLE);	
	    });
	    tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +6+"\'", [], function (tx, results) {
			$('#formValueId6').val(results.rows.item(0).TILE_TITLE);	
	    });
	    tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +7+"\'", [], function (tx, results) {
			$('#formValueId7').val(results.rows.item(0).TILE_TITLE);	
		});
		tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +8+"\'", [], function (tx, results) {
			$('#formValueId8').val(results.rows.item(0).TILE_TITLE);	
		});
		tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +9+"\'", [], function (tx, results) {
			$('#formValueId9').val(results.rows.item(0).TILE_TITLE);	
		});
		tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +10+"\'", [], function (tx, results) {
			$('#formValueId10').val(results.rows.item(0).TILE_TITLE);	
		});
		tx.executeSql("SELECT TILE_TITLE FROM TILES_TABLE WHERE rowid=\'" +11+"\'", [], function (tx, results) {
			$('#formValueId11').val(results.rows.item(0).TILE_TITLE);	
		});
    });
});
$(document).ready(function() {
  var db = openDatabase('TILE_DB', '1.0', 'Test DB', 2 * 1024 * 1024);
  db.transaction(function (tx) {
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +1+"\'", [], function (tx, results) {
		$('#tile1Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);    
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +2+"\'", [], function (tx, results) {           
		$('#tile2Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);	          
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +3+"\'", [], function (tx, results) {
		$('#tile3Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +4+"\'", [], function (tx, results) {
		$('#tile4Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +5+"\'", [], function (tx, results) {
		$('#tile5Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +6+"\'", [], function (tx, results) {
		$('#tile6Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +7+"\'", [], function (tx, results) {
		$('#tile7Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +8+"\'", [], function (tx, results) {
		$('#tile8Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +9+"\'", [], function (tx, results) {
		$('#tile9Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +10+"\'", [], function (tx, results) {
		$('#tile10Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });
	  tx.executeSql("SELECT IMAGE_COUNT_IN_TILE FROM TILES_TABLE WHERE rowid=\'" +11+"\'", [], function (tx, results) {
		$('#tile11Select').val(results.rows.item(0).IMAGE_COUNT_IN_TILE);
	  });      
  });
});