import React from 'react';
import './App.css';
import './Settings.css';

function Settings() {
    return (
        <div>
            <div className="container-1">
                <div className="dot" />
                <div className="accountname">Account</div>
                <div className="mainrect">
                    <div className="container-1">
                        <div className="term1">Plan Type</div>
                        <div className="term2">Plan Expires</div>
                        <div className="term3">Language</div>
                        <div className="term4">Change Email</div>
                        <div className="term5">Change Password</div>
                        <div className="term6">Delete Account</div>
                        <div className="termA">Free</div>
                        <div className="termB">Never</div>
                        <div className="termC">English</div>
                        <div className="termD">
                        <form>
                            <input type="text" className="termD" />
                        </form>
                        </div>
                        <div className="termE">
                            <form>
                                <input type="text" className="termE" />
                            </form>
                        </div>
                        <div className="termF">
                            <button className="termF">Delete Account</button>
                        </div>
                        <button className="termG">Save</button>
                        <button className="termH">Save</button>
                    </div>
                </div>
                <div className="bottom1">Starting your membership today?</div>
                <div className="bottom2">Unlock premium features and explore unlimited possibilites...</div>
                <button className="bottom3">Join right now +</button>
            </div>
        </div>


    );
}
export default Settings;