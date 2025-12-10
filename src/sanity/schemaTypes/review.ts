import { defineField, defineType } from 'sanity'

export const review = defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        defineField({
            name: 'parentName',
            title: 'Parent Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            initialValue: 'Parent',
            description: 'e.g. "Toddler Mom", "Working Mom"'
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            initialValue: 5,
            validation: (Rule) => Rule.required().min(1).max(5),
        }),
        defineField({
            name: 'layoutType',
            title: 'Layout Style',
            type: 'string',
            options: {
                list: [
                    { title: 'Polaroid', value: 'polaroid' },
                    { title: 'Sticky Note', value: 'sticky' },
                ],
                layout: 'radio'
            },
            initialValue: 'polaroid'
        }),
        defineField({
            name: 'stickyColor',
            title: 'Sticky Note Color',
            type: 'string',
            hidden: ({ document }) => document?.layoutType !== 'sticky',
            options: {
                list: [
                    { title: 'Yellow', value: 'bg-yellow-100' },
                    { title: 'Pink', value: 'bg-pink-100' },
                    { title: 'Blue', value: 'bg-blue-100' },
                ]
            }
        }),
        defineField({
            name: 'rotation',
            title: 'Rotation (degrees)',
            type: 'number',
            initialValue: 0,
            description: 'Visual tilt for the card (e.g. -2, 3)'
        }),
        defineField({
            name: 'text',
            title: 'Review Text',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'headshot',
            title: 'Parent Headshot',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'date',
            title: 'Date String',
            type: 'string',
            description: 'Display date (e.g. "Oct 2023")'
        })
    ],
})
