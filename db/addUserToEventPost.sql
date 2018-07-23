SELECT e.id, e.title, e.description, e.date, e.time, e.address, e.image_url, u.user_name, user_avatar
FROM events e JOIN users u ON
e.id = u.userid