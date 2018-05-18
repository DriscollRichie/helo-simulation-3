insert into users
(username, password, profile_pic)
values
($1, $2, 'data:image/png;base64,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')
returning *;