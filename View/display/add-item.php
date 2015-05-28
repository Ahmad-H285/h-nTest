<!DOCTYPE html>
<html>
<head>
	<title>Add Item</title>
</head>
<body>
	<form action="" method="POST">
		<table>
			<tr>
				<h1>Add New Item</h1>
			</tr>

			<tr>
				<td><label for="item-name">Item Name</label></td>
				<td><input type="text" name="item-name"></td>
			</tr>

			<tr>
				<td><label for="select-category">Select Category</label></td>
				<td>
					<select>
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
				<td><input name="notification" type="text"></td>
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
</body>
</html>