import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { ReligioUrl } from '../../Api/ApiUrl';

const localizer = momentLocalizer(moment);

const BirthdayCalendar = () => {
    const [events, setEvents] = useState([]);
    const [todayEvents, setTodayEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${ReligioUrl}/member/province/birthday/this_month/1`);
                const result = await response.json();
                const data = result?.data;
                const birthdayEvents = data?.map(member => {
                    const [day, month] = member?.dob?.split(' - ');
                    const eventDate = new Date(`${month} ${day}, ${new Date().getFullYear()}`);

                    return {
                        title: member?.member_name,
                        start: eventDate,
                        end: eventDate,
                        allDay: true,
                        resource: member,
                    };
                });
                setEvents(birthdayEvents);
                const today = moment().startOf('day').toDate();
                const todaysBirthdays = birthdayEvents.filter(event =>
                    moment(event.start).isSame(today, 'day')
                );
                setTodayEvents(todaysBirthdays);
            } catch (error) {
                console.error('Error fetching birthday data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center'>Birthday Calendar</h2>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 800, padding: "10px" }}
                eventPropGetter={(event) => ({
                    style: {
                        backgroundColor: moment(event.start).isSame(new Date(), 'day') ? '#ffcccb' : '#3174ad',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '5px',
                        marginTop: "4px",
                        fontSize: "13px"
                    },
                })}
            />

            {todayEvents?.length > 0 && (
                <div className="today-birthday-gif" style={{ marginTop: '20px' }}>
                    <h3>Today's Birthdays:</h3>
                    {todayEvents?.map((event, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <p style={{ margin: '0 10px 0 0', fontSize: '18px', fontWeight: 'bold' }}>{event.title}</p>
                            <img src={"images/all-img/birthday.gif"} alt="Birthday Gif" style={{ width: '50px', height: '50px' }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default BirthdayCalendar;
