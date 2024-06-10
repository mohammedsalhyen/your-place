export default {
    name: 'business',
    type: 'document',
    title: 'Business',
    fields: [
        { name: 'fullName', type: 'string', title: 'Full Name' },
        { name: 'email', type: 'string', title: 'Email' },
        { name: 'password', type: 'string', title: 'Password' },
        { name: 'phoneNumber', type: 'string', title: 'Phone Number' },
        { name: 'businessName', type: 'string', title: 'Business Name' },
        { name: 'businessAddress', type: 'string', title: 'Business Address' },
        { name: 'businessType', type: 'string', title: 'Business Type' },
        { name: 'website', type: 'url', title: 'Website' },
        { name: 'description', type: 'text', title: 'Description' },
        { name: 'workingHours', type: 'string', title: 'Working Hours' },
        { name: 'socialMedia', type: 'string', title: 'Social Media' },
        {
            name: 'profilePicture',
            type: 'image',
            title: 'rofile Picture',
            options: { hotspot: true },
        },
    ],
};
