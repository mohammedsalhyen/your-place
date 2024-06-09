export default {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        { name: 'fullName', type: 'string', title: 'Full Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'password', type: 'string', title: 'Password' },
        { name: 'phoneNumber', type: 'string', title: 'Phone Number' },
        { name: 'dateOfBirth', type: 'date', title: 'Date of Birth' },
        { name: 'address', type: 'string', title: 'Address' },
        { name: 'gender', type: 'string', title: 'Gender' },
        {
            name: 'profilePicture',
            type: 'image',
            title: 'Profile Picture',
            options: { hotspot: true },
        },
    ],
};