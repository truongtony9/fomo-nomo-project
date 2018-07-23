UPDATE events
SET title = $2, description = $3, date = $4, time = $5, address = $6, image_url = $7
WHERE id = $1;