#ifndef SYSTEM_H
#define SYSTEM_H

#include <iostream>
#include <fstream>
using namespace std;

// Base Class
class ConsumerUnit {
public:
    string name;
    float usage;

    virtual void distributeWater() {
        cout << "Normal water distribution\n";
    }
};

// Derived Classes (Inheritance)
class Residential : public ConsumerUnit {
public:
    void distributeWater() override {
        cout << "Residential supply\n";
    }
};

class Hospital : public ConsumerUnit {
public:
    void distributeWater() override {
        cout << "High priority hospital supply\n";
    }
};

// Pipeline Class
class Pipeline {
public:
    string type;
    float pressure;

    void checkPressure() {
        if (pressure < 10) {
            throw "Low Pressure!";
        }
    }
};

// Leak Sensor
class LeakSensor {
public:
    bool leakDetected;

    void detectLeak() {
        if (leakDetected)
            cout << "Leak detected!\n";
    }
};

// Valve Controller
class ValveController {
public:
    void openValve() {
        cout << "Valve Opened\n";
    }

    void closeValve() {
        cout << "Valve Closed\n";
    }
};

#endif