import { useState, useEffect } from "react";
import {
  Flex,
  Input,
  SimpleGrid,
  Text,
  Select,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { languageText } from "../utils/Respondent";
import { formFieldsStep1, formFieldsStep2, places } from "../utils/Respondent";
import NextButton from "../components/atoms/NextButton";
import SelectLanguage from "../components/atoms/SelectLanguage";
import { getIndianTime } from "../utils/constant";

const RespondentDemographic = ({ handleNext, language }) => {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    doorNo: "",
    floorNo: "",
    houseName: "",
    streetName: "",
    areaName: "",
    townName: "",
    landmark: "",
    pincode: "",
    phoneRes: "",
    phonePP: "",
    phoneOff: "",
    emailId: "",
    interviewerName: "",
    interviewerId: "",
    mobile: "",
    place: "",
  });

  const [error, setError] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [step, setStep] = useState(1); // Step state to track which form part to show
  const [startTime, setStartTime] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false); // Track form completion
  const langText = languageText[language] || languageText["en"];

  useEffect(() => {
    requestMicrophonePermission();
    requestLocationPermission();
  }, []);

  useEffect(() => {
    validateForm();
  }, [formData]);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    } catch (err) {
      setError("Microphone access is required to proceed.");
    }
  };

  const requestLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        () => setError("Location is required to proceed.")
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const requiredFieldsStep1 = formFieldsStep1.map((field) => field.name);
    const requiredFieldsStep2 = formFieldsStep2.map((field) => field.name);

    const allRequiredFields = step === 1 ? requiredFieldsStep1 : requiredFieldsStep2;
    const isComplete = allRequiredFields.every((field) => formData[field]?.trim());

    if (step === 2 && !formData.place.trim()) {
      setIsFormComplete(false);
    } else {
      setIsFormComplete(isComplete);
    }
  };

  const handleSubmit = (step) => {
    const isValid = /^\d{10}$/.test(formData.mobile);
    const isValidMail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)
    if(!isValid){
      alert("Please enter valid mobile number")
      return 
    }
    if(!isValidMail){
      alert("Please enter valid email address")
      return 
    }
    if(error){
      alert(error)
      return
    }
    
    const respondentData = { ...formData, latitude, longitude };
    const start = getIndianTime(); // Get the current IST time

    setStartTime(start);

    const storedData = JSON.parse(localStorage.getItem("questionsData")) || {};
    storedData["startTime"] = {
      date: start.toLocaleDateString("en-IN"), // Format date for India
      time: start.toLocaleTimeString("en-IN"), // Format time for India
    };

    const existingData = JSON.parse(localStorage.getItem("ProductsTest")) || {};
    const updatedData = {
      ...existingData,
      ...respondentData,
      startTime: storedData.startTime,
    };

    localStorage.setItem("ProductsTest", JSON.stringify(updatedData));

    if (step === 1) {
      setStep(2); // Go to step 2
    } else {
      handleNext(); // Call the function to handle the final step
    }
  };

  return (
    <Flex
      p={4}
      flexDirection="column"
      justifyContent="center"
      alignItems="center">
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        {step === 1 ? langText.title : "FIELD CONTROL INFORMATION"}
      </Text>

      {error && (
        <Alert status="error" mb={4} width="100%">
          <AlertIcon />
          <AlertTitle mr={2}>Error:</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        spacing={4}
        width="100%"
        maxWidth="800px"
        mb={8}>
        {(step === 1 ? formFieldsStep1 : formFieldsStep2).map((field, index) => (
          <Input
            key={index}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleChange}
            type={field.type || "text"}
          />
        ))}
        {step === 2 && (
          <>
            <Select
              name="place"
              placeholder={langText.place}
              onChange={handleChange}>
              {places.map((place, index) => (
                <option key={index} value={index + 1}>
                  {place}
                </option>
              ))}
            </Select>
            <SelectLanguage />
          </>
        )}
      </SimpleGrid>

      <Flex>
        <NextButton onClick={() => handleSubmit(step)} 
        isDisabled={!isFormComplete} 
        />
      </Flex>
    </Flex>
  );
};

export default RespondentDemographic;
