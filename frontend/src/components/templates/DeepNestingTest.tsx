import React, { useState } from "react";

interface NotificationSetting {
  id: string;
  label: string;
  enabled: boolean;
}

const defaultSettings: NotificationSetting[] = [
  { id: "email", label: "Email Notifications", enabled: true },
  { id: "push", label: "Push Notifications", enabled: false },
  { id: "sms", label: "SMS Alerts", enabled: true },
];

export default function DeepNestingTest() {
  const [settings, setSettings] = useState(defaultSettings);
  const [activeSection, setActiveSection] = useState<string | null>("notifications");

  const toggle = (id: string) => {
    setSettings((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200">
          <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your preferences and notifications</p>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="px-6 py-4">
            <button
              className="flex items-center justify-between w-full text-left group"
              onClick={() =>
                setActiveSection(activeSection === "notifications" ? null : "notifications")
              }
            >
              <span className="text-sm font-medium text-gray-800">Notifications</span>
              <svg
                className={`w-4 h-4 text-gray-400 transition-transform ${
                  activeSection === "notifications" ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeSection === "notifications" && (
              <div className="mt-4 space-y-3">
                {settings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between py-2">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-700">{setting.label}</span>
                      <span className="text-xs text-gray-400">
                        {setting.enabled ? "Currently active" : "Currently disabled"}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                          setting.enabled ? "bg-indigo-600" : "bg-gray-200"
                        }`}
                        onClick={() => toggle(setting.id)}
                        aria-pressed={setting.enabled}
                        aria-label={`Toggle ${setting.label}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
                            setting.enabled ? "translate-x-6" : "translate-x-1"
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
