<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Add Item</title>
</head>
<body>
	<form action="" method="POST" id="add-new-item">
		<table>
			<tr>
				<h1>Add New Item</h1>
			</tr>

			<tr>
				<td><label for="item-name">Item Name <font color="red">*</font></label></td>
				<td><input type="text" name="item-name" class="required-item-field"></td>
			</tr>

			<tr>
				<td><label for="select-category">Select Category <font color="red">*</font></label></td>
				<td>
					<select class="required-item-field">
						<option></option>
						<option>Books</option>
						<option>Movies/Series</option>
						<option>Games</option>
					</select>
				</td>
			</tr>

			<tr>
				<td><label for="item-image">Item image</label></td>
				<td><button name="item-image">Upload Image</button></td>
			</tr>

			<tr>
				<td><label for="item-progress">Progress</label></td>
				<td><input name="item-progress" type="number"></td>
				<td>%</td>
			</tr>

			<tr>
				<td><label for="notification">Notification</label></td>
				<td><input name="date" type="text"></td>
				<td><input name="time" type="text"></td>
			</tr>
			
			<tr>
				<td><label for="item-attachement">Item Attachment</label></td>
				<td><button name="item-attachment">Upload attachment</button></td>
			</tr>
			
			<tr>
				<td><button type="submit">Add Item</button></td>
			</tr>
		</table>
	</form>
	<script type="text/javascript" src="../../resources/lib/JS/jquery-2.1.4.js"></script>
	<script type="text/javascript" src="../js/reminvaJS.js"></script>
</body>
</html>