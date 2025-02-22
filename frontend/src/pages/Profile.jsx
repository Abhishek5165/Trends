import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Profile = () => {
    const { backendURL, token } = useContext(ShopContext);
    const [profile, setProfile] = useState({ name: '', email: '' });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!token) return;
            try {
                const res = await axios.get(`${backendURL}/api/user/profile`, { headers: { token } });
                if (res.data.success) {
                    setProfile(res.data.user);
                } else {
                    toast.error(res.data.message);
                }
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchProfile();
    }, [backendURL, token]);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const res = await axios.put(`${backendURL}/api/user/profile`, profile, { headers: { token } });
            if (res.data.success) {
                toast.success('Profile updated successfully!');
                setEditing(false);
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-4 mb-20 p-6 bg-white shadow rounded-lg">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className="mb-4">
                <label className="block text-gray-600">Name</label>
                <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-600">Email</label>
                <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    disabled={!editing}
                    className="w-full p-2 border rounded"
                />
            </div>
            {editing ? (
                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save
                </button>
            ) : (
                <button onClick={() => setEditing(true)} className="bg-gray-500 text-white px-4 py-2 rounded">
                    Edit
                </button>
            )}
        </div>
    );
};

export default Profile;
