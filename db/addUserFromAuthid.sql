INSERT INTO users
    ( user_name, auth_id, user_avatar, user_email )
VALUES
    ($1, $2, $3, $4)
RETURNING * ;
