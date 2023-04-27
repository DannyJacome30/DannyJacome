import React from 'react';

import Link from 'next/link';

function ProjectTech() {
    return ( 
        <div>
                        <ul>
                            <li>
                                <Link href='/'>
                                <button>
                                    Languages
                                </button>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <button>
                                        Frameworks
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <button>
                                        Technologies
                                    </button>
                                </Link>
                            </li>     
                        </ul>
                    </div>
     );
}

export default ProjectTech;