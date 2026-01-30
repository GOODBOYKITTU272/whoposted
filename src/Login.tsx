import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';

type LoginProps = {
    onBack?: () => void;
};

function Login({ onBack }: LoginProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });
    };

    return (
        <div className="min-h-screen bg-[#f5f7fb] text-slate-900 flex items-center justify-center px-4 sm:px-6 py-16">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl border border-slate-200/70 shadow-[0_18px_60px_rgba(15,23,42,0.12)] px-8 py-10">
                    <div className="text-center mb-8">
                        <button
                            type="button"
                            onClick={onBack}
                            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#2f35d1] hover:text-[#252aaf] transition-colors mb-4"
                        >
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#2f35d1]/10 text-[#2f35d1]">
                                W
                            </span>
                            WhoPosted
                        </button>
                        <h1 className="text-2xl font-semibold text-slate-900">Welcome back</h1>
                        <p className="text-sm text-slate-500 mt-1">Sign in to continue</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-600 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3a3df0] focus:ring-2 focus:ring-[#3a3df0]/15"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-600 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="********"
                                    className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#3a3df0] focus:ring-2 focus:ring-[#3a3df0]/15"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-[#2f35d1] py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#2f35d1]/20 hover:bg-[#2a2fc2] transition-colors"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <a href="#" className="text-sm text-[#2f35d1] hover:text-[#252aaf] transition-colors">
                            Forgot password?
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
