import { doc, getDoc } from 'firebase/firestore';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import UserDocument from '../../components/UserDocument';
import Profile from '../../components/Profile';
import { IDocuments } from '../../interface/document';
import { IUser } from '../../interface/user';
import { db } from '../../lib/clientApp';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Navbar from '../../components/shared/Navbar';

const ProfileDetails = () => {
    const router = useRouter();
    const [userData, setUserData] = React.useState<IUser>();
    const [filter, setFilter] = React.useState<string>('all');
    const [filteredData, setFilteredData] = React.useState<IDocuments[]>([]);
    const [docFilter, setDocFilter] = React.useState<string>('all');
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [isExpired, setIsexpired] = React.useState<boolean>(false);
    const [documents, setDocuments] = React.useState<IDocuments[]>([]);

    const getUserData = React.useCallback(async () => {
        const { uid } = router.query;
        if (uid) {
            const docRef = doc(db, "shared-doc", uid as string);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setUserData(docSnap.data() as IUser);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                setIsexpired(true);
                console.log("No such document!");
            }
        }
    }, [router]);

    React.useEffect(() => {
        if (router.isReady) {
            getUserData();

        }
    }, [getUserData, router.isReady]);

    useEffect(() => {
        userData?.documents && setDocuments(userData.documents.reverse());
    }, [userData])

    useEffect(() => {
        if (documents.length !== 0) {
            const docOnly = documents?.filter((userDocument) => { return userDocument.type.toLocaleLowerCase() === 'document' })
            if (filter === 'document') {
                setFilteredData(docOnly!)
            }
            const issueOnly = documents?.filter((userDocument) => { return userDocument.type.toLocaleLowerCase() === 'issue' })
            if (filter === 'issue') {
                setDocFilter('all');
                setFilteredData(issueOnly!);
            }
            const medicineUpdateOnly = documents?.filter((userDocument) => { return userDocument.type.toLocaleLowerCase() === 'medicine update' })
            if (filter === 'medicine update') {
                setDocFilter('all');
                setFilteredData(medicineUpdateOnly!)
            }
            const babyHealthOnly = documents?.filter((userDocument) => { return userDocument.type.toLocaleLowerCase() === 'baby health' })
            if (filter === 'baby health') {
                setDocFilter('all');
                setFilteredData(babyHealthOnly!)
            }

            const doc_prescriptonOnly = docOnly?.filter((userDocument) => { return userDocument.doc_type?.toLocaleLowerCase() === 'prescription' })
            const doc_reportOnly = docOnly?.filter((userDocument) => { return userDocument.doc_type?.toLocaleLowerCase() === 'report' })
            const doc_USGOnly = docOnly?.filter((userDocument) => { return userDocument.doc_type?.toLocaleLowerCase() === 'ultrasonography' })
            if (docFilter === 'report') {
                setFilteredData(doc_reportOnly!)
            }
            if (docFilter === 'prescription') {
                setFilteredData(doc_prescriptonOnly!)
            }
            if (docFilter === 'usg') {
                setFilteredData(doc_USGOnly!)
            }
        }
    }, [documents, filter, docFilter])


    const handleChange = (event: SelectChangeEvent) => {
        setFilter(event.target.value as string);
    };

    const handleChangeDoc = (event: SelectChangeEvent) => {
        setDocFilter(event.target.value as string);
    };


    return (
        <div>
            {isLoading ? (
                <Head>
                    <title>Loading...</title>
                </Head>
            ) : (
                <Head>
                    <title>{userData?.name ? userData.name : "Invalid Link"}</title>
                </Head>
            )}
            {isLoading ? (
                <div className=' flex justify-center items-center h-screen'>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    {isExpired ? (
                        <div className=' flex justify-center items-center h-screen'>
                            <div>
                                <div className=' flex justify-center'>
                                <img src="/invalid_link.svg" alt="" className=' w-72 mb-16' />
                                </div>
                                <p className=' text-4xl mx-5'>This Link is <span className=' text-red-500'>expired</span> or the URL is <span className=' text-red-500'>invalid</span>!</p>
                            </div>
                        </div>
                    ) : (
                        <>
                        <Navbar />
                            <div className='lg:grid lg:grid-cols-8 px-8 md:px-10 lg:px-20 lg:gap-10'>
                                <div className='lg:col-span-3'>
                                    {userData && <Profile userData={userData} />}
                                </div>
                                <div className=' col-span-1 lg:col-span-5'>
                                    {documents?.length !== 0 ? (
                                        <>
                                            <div className='mt-10 flex sm:flex-row-reverse flex-col-reverse justify-between items-center'>
                                                <div className='flex sm:flex-row-reverse flex-col-reverse'>

                                                    <div className='w-52'>
                                                        <FormControl fullWidth className='mt-5'>
                                                            <InputLabel id="base-filter">Type</InputLabel>
                                                            <Select
                                                                labelId="base-filter"
                                                                id="demo-simple-select"
                                                                value={filter}
                                                                label="Type"
                                                                onChange={handleChange}
                                                                
                                                            >
                                                                <MenuItem value='all'>All</MenuItem>
                                                                <MenuItem value='document'>Document</MenuItem>
                                                                <MenuItem value='issue'>Issue</MenuItem>
                                                                <MenuItem value='medicine update'>Medicine Update</MenuItem>
                                                                <MenuItem value='baby health'>Baby Health</MenuItem>

                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                    <div className='w-52 mr-10'>
                                                        {filter === 'document' && (
                                                            <FormControl fullWidth className='mt-5'>
                                                                <InputLabel id="doc-filter">Document Type</InputLabel>
                                                                <Select
                                                                    labelId="doc-filter"
                                                                    id="doc-filter"
                                                                    value={docFilter}
                                                                    label="Document Type"
                                                                    onChange={handleChangeDoc}
                                                                >
                                                                    <MenuItem value='all'>All</MenuItem>
                                                                    <MenuItem value='prescription'>Prescription</MenuItem>
                                                                    <MenuItem value='report'>Report</MenuItem>
                                                                    <MenuItem value='usg'>Ultrasonography</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className=' md:flex items-center hidden'>
                                                    <FilterAltIcon />
                                                    <p className=' text-xl font-medium'>Filter</p>
                                                </div>
                                            </div>
                                            {filter === 'all' ? (
                                                <>
                                                    {documents.map((userDocument: IDocuments, i: number) => {
                                                        return <UserDocument key={i} userDocument={userDocument} />
                                                    })}
                                                </>
                                            ) : (
                                                <>
                                                    {filteredData.map((userDocument: IDocuments, i: number) => {
                                                        return <UserDocument key={i} userDocument={userDocument} />
                                                    })}
                                                </>
                                            )}
                                        </>
                                    ) : null}
                                </div>
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    )
}

export default ProfileDetails