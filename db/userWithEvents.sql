SELECT user_name, title
from users join events on users.userid = events.user_id
where users.userid = $1;