import React, { useEffect, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Uncomment the line below if using React Router
// import { Link } from 'react-router-dom';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');
    const [totalBlogs, setTotalBlogs] = useState('Loading...');
    const jwtToken = localStorage.getItem('RegisterUser'); // JWT from localStorage

    useEffect(() => {
        // Fetch total blogs on component mount
        const fetchTotalBlogs = async () => {
            const apiUrl = 'http://localhost:3000/api/getnewspost';
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setTotalBlogs(data.length);
            } catch (error) {
                console.error('Error fetching total blogs:', error);
                setTotalBlogs('Error');
            }
        };

        fetchTotalBlogs();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const postData = { title, category, imageUrl, content };

        try {
            const response = await fetch('http://localhost:3000/api/addnews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtToken}`, // Use the JWT in the header
                },
                body: JSON.stringify(postData),
            });
            const data = await response.json();
            if (data.error) {
                alert(data.error);
            } else {
                alert('News created successfully!');
                // Optionally reset the form
                setTitle('');
                setCategory('');
                setImageUrl('');
                setContent('');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the news.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('registredUserLoginToken');
        window.location.href = 'login.html'; // Redirect to the login page
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="text-center my-4">
                    <p className="display-4 fw-bold text-dark">
                        <span className="text-red">C</span>reate<span className="text-red">N</span>ews!
                    </p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="card rounded-4 border-0 shadow">
                        <div className="card-body text-center">
                            <h5 className="card-title">Total News</h5>
                            <p id="total-blogs" className="card-text fs-1 fw-bold">{totalBlogs}</p>
                            {/* Updated link to home page */}
                            {/* <a href="../index.html" className="btn btn-primary">View All News</a> */}
                            {/* If using React Router, use the following line instead: */}
                            {/* <Link to="/" className="btn btn-primary">View All News</Link> */}
                        </div>
                    </div>
                </div>
               
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    
                                />
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="category" className="mb-1">Category</label>
                                <select
                                    className="form-control"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    
                                >
                                    <option value="">Select Category</option>
                                    <option value="AI/ML">AI/ML</option>
                                    <option value="Advertising">Advertising</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="AR/VR">AR/VR</option>
                                    <option value="SEO">SEO</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="Content Marketing">Content Marketing</option>
                                    <option value="Email Marketing">Email Marketing</option>
                                    <option value="AdTech">AdTech</option>
                                    <option value="Marketing Automation">Marketing Automation</option>
                                    <option value="Analytics & Data">Analytics & Data</option>
                                    <option value="Digital Ads">Digital Ads</option>
                                    <option value="Influencer Marketing">Influencer Marketing</option>
                                    <option value="Ecommerce">Ecommerce</option>
                                    <option value="Video Marketing">Video Marketing</option>
                                    <option value="Event Marketing">Event Marketing</option>
                                    <option value="Sustainable Marketing">Sustainable Marketing</option>
                                    <option value="Influencers">Influencers</option>
                                </select>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="imageUrl">Image URL</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="imageUrl"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    
                                />
                            </div>
                            <Editor
                                apiKey='2mjaq8ght66rltmc6cej37wv5dk9o19im3t54al6jydgfpxr'
                                init={{
                                    plugins: [
                                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                                        'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown',
                                    ],
                                    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                    tinycomments_mode: 'embedded',
                                    tinycomments_author: 'Author name',
                                    mergetags_list: [
                                        { value: 'First.Name', title: 'First Name' },
                                        { value: 'Email', title: 'Email' },
                                    ],
                                    ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                                }}
                                initialValue="Welcome to DigiMark!"
                            />
                            <div className="text-center my-2">
                                <button type="submit" className="btn btn-danger w-25 rounded-5 btn-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBlog;
