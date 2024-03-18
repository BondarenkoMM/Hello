db.users.updateMany(
    {
        country: {$ne: ['Germany', 'France']},
        balance: balance >= 0
    }
        [
        {
            $mul: {
                balance: 0.97
            }
        }
        ]
)